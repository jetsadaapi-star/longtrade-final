"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = __importStar(require("bcrypt"));
let AdminService = class AdminService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getDashboardStats() {
        const [usersCount, coursesCount, articlesCount, ebooksCount, productsCount, enrollmentsCount,] = await Promise.all([
            this.prisma.users.count(),
            this.prisma.courses.count({ where: { deleted_at: null } }),
            this.prisma.articles.count({ where: { deleted_at: null } }),
            this.prisma.ebooks.count({ where: { deleted_at: null } }),
            this.prisma.products.count({ where: { deleted_at: null } }),
            this.prisma.enrollments.count(),
        ]);
        return {
            users: usersCount,
            courses: coursesCount,
            articles: articlesCount,
            ebooks: ebooksCount,
            products: productsCount,
            enrollments: enrollmentsCount,
        };
    }
    async getRecentActivity() {
        const recentUsers = await this.prisma.users.findMany({
            take: 5,
            orderBy: { created_at: 'desc' },
            select: { id: true, name: true, email: true, created_at: true },
        });
        const recentEnrollments = await this.prisma.enrollments.findMany({
            take: 5,
            orderBy: { created_at: 'desc' },
            include: {
                users: { select: { name: true, email: true } },
                courses: { select: { title: true } },
            },
        });
        return {
            recent_users: recentUsers.map(u => ({
                ...u,
                id: u.id.toString(),
            })),
            recent_enrollments: recentEnrollments.map(e => ({
                id: e.id.toString(),
                user: e.users.name,
                course: e.courses.title,
                created_at: e.created_at,
            })),
        };
    }
    async getUsers(page = 1, limit = 10, search, role) {
        const skip = (page - 1) * limit;
        const where = {};
        if (search) {
            where.OR = [
                { name: { contains: search } },
                { email: { contains: search } },
            ];
        }
        if (role) {
            where.role = role;
        }
        const [users, total] = await Promise.all([
            this.prisma.users.findMany({
                where,
                skip,
                take: limit,
                orderBy: { created_at: 'desc' },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone: true,
                    role: true,
                    avatar: true,
                    email_verified_at: true,
                    created_at: true,
                    updated_at: true,
                },
            }),
            this.prisma.users.count({ where }),
        ]);
        return {
            data: users.map(u => ({ ...u, id: u.id.toString() })),
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async getUserById(id) {
        const user = await this.prisma.users.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                role: true,
                avatar: true,
                email_verified_at: true,
                created_at: true,
                updated_at: true,
            },
        });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        return { ...user, id: user.id.toString() };
    }
    async createUser(data) {
        const existingUser = await this.prisma.users.findUnique({ where: { email: data.email } });
        if (existingUser)
            throw new common_1.BadRequestException('Email already exists');
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const user = await this.prisma.users.create({
            data: {
                name: data.name,
                email: data.email,
                password: hashedPassword,
                role: data.role || 'student',
                phone: data.phone,
            },
        });
        return { id: user.id.toString(), name: user.name, email: user.email, role: user.role };
    }
    async updateUser(id, data) {
        const updateData = { ...data };
        if (data.password) {
            updateData.password = await bcrypt.hash(data.password, 10);
        }
        const user = await this.prisma.users.update({
            where: { id },
            data: updateData,
        });
        return { id: user.id.toString(), name: user.name, email: user.email, role: user.role };
    }
    async deleteUser(id) {
        await this.prisma.users.delete({ where: { id } });
        return { success: true, message: 'User deleted successfully' };
    }
    async getCourses(page = 1, limit = 10, search) {
        const skip = (page - 1) * limit;
        const where = { deleted_at: null };
        if (search) {
            where.title = { contains: search };
        }
        const [courses, total] = await Promise.all([
            this.prisma.courses.findMany({
                where,
                skip,
                take: limit,
                orderBy: { created_at: 'desc' },
                include: { categories: { select: { id: true, name: true } } },
            }),
            this.prisma.courses.count({ where }),
        ]);
        return {
            data: courses.map(c => ({
                ...c,
                id: c.id.toString(),
                category_id: c.category_id?.toString(),
                price: Number(c.price),
                original_price: c.original_price ? Number(c.original_price) : null,
                average_rating: Number(c.average_rating),
            })),
            meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
        };
    }
    async getCourseById(id) {
        const course = await this.prisma.courses.findUnique({
            where: { id },
            include: { categories: true },
        });
        if (!course)
            throw new common_1.NotFoundException('Course not found');
        return {
            ...course,
            id: course.id.toString(),
            category_id: course.category_id?.toString(),
            price: Number(course.price),
            original_price: course.original_price ? Number(course.original_price) : null,
        };
    }
    async createCourse(data) {
        const course = await this.prisma.courses.create({ data });
        return { ...course, id: course.id.toString(), price: Number(course.price) };
    }
    async updateCourse(id, data) {
        const course = await this.prisma.courses.update({ where: { id }, data });
        return { ...course, id: course.id.toString(), price: Number(course.price) };
    }
    async deleteCourse(id) {
        await this.prisma.courses.update({ where: { id }, data: { deleted_at: new Date() } });
        return { success: true, message: 'Course deleted successfully' };
    }
    async getArticles(page = 1, limit = 10, search) {
        const skip = (page - 1) * limit;
        const where = { deleted_at: null };
        if (search) {
            where.title = { contains: search };
        }
        const [articles, total] = await Promise.all([
            this.prisma.articles.findMany({
                where,
                skip,
                take: limit,
                orderBy: { created_at: 'desc' },
                include: { categories: { select: { id: true, name: true } } },
            }),
            this.prisma.articles.count({ where }),
        ]);
        return {
            data: articles.map(a => ({
                ...a,
                id: a.id.toString(),
                category_id: a.category_id?.toString(),
            })),
            meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
        };
    }
    async createArticle(data) {
        const article = await this.prisma.articles.create({ data });
        return { ...article, id: article.id.toString() };
    }
    async updateArticle(id, data) {
        const article = await this.prisma.articles.update({ where: { id }, data });
        return { ...article, id: article.id.toString() };
    }
    async deleteArticle(id) {
        await this.prisma.articles.update({ where: { id }, data: { deleted_at: new Date() } });
        return { success: true, message: 'Article deleted successfully' };
    }
    async getEbooks(page = 1, limit = 10, search) {
        const skip = (page - 1) * limit;
        const where = { deleted_at: null };
        if (search) {
            where.title = { contains: search };
        }
        const [ebooks, total] = await Promise.all([
            this.prisma.ebooks.findMany({
                where,
                skip,
                take: limit,
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.ebooks.count({ where }),
        ]);
        return {
            data: ebooks.map(e => ({
                ...e,
                id: e.id.toString(),
                category_id: e.category_id?.toString(),
                price: Number(e.price),
            })),
            meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
        };
    }
    async createEbook(data) {
        const ebook = await this.prisma.ebooks.create({ data });
        return { ...ebook, id: ebook.id.toString(), price: Number(ebook.price) };
    }
    async updateEbook(id, data) {
        const ebook = await this.prisma.ebooks.update({ where: { id }, data });
        return { ...ebook, id: ebook.id.toString(), price: Number(ebook.price) };
    }
    async deleteEbook(id) {
        await this.prisma.ebooks.update({ where: { id }, data: { deleted_at: new Date() } });
        return { success: true, message: 'Ebook deleted successfully' };
    }
    async getProducts(page = 1, limit = 10, search, category) {
        const skip = (page - 1) * limit;
        const where = { deleted_at: null };
        if (search) {
            where.name = { contains: search };
        }
        if (category) {
            where.category = category;
        }
        const [products, total] = await Promise.all([
            this.prisma.products.findMany({
                where,
                skip,
                take: limit,
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.products.count({ where }),
        ]);
        return {
            data: products.map(p => ({
                ...p,
                id: p.id.toString(),
                price: Number(p.price),
                rating: Number(p.rating),
            })),
            meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
        };
    }
    async createProduct(data) {
        const product = await this.prisma.products.create({ data });
        return { ...product, id: product.id.toString(), price: Number(product.price) };
    }
    async updateProduct(id, data) {
        const product = await this.prisma.products.update({ where: { id }, data });
        return { ...product, id: product.id.toString(), price: Number(product.price) };
    }
    async deleteProduct(id) {
        await this.prisma.products.update({ where: { id }, data: { deleted_at: new Date() } });
        return { success: true, message: 'Product deleted successfully' };
    }
    async getCategories(type) {
        const where = {};
        if (type)
            where.type = type;
        const categories = await this.prisma.categories.findMany({
            where,
            orderBy: { order: 'asc' },
        });
        return categories.map(c => ({ ...c, id: c.id.toString() }));
    }
    async createCategory(data) {
        const category = await this.prisma.categories.create({ data: data });
        return { ...category, id: category.id.toString() };
    }
    async updateCategory(id, data) {
        const category = await this.prisma.categories.update({ where: { id }, data });
        return { ...category, id: category.id.toString() };
    }
    async deleteCategory(id) {
        await this.prisma.categories.delete({ where: { id } });
        return { success: true, message: 'Category deleted successfully' };
    }
    async getSiteSettings() {
        const settings = await this.prisma.site_settings.findFirst();
        if (!settings) {
            return {
                id: null,
                site_name: 'LongTrade Academy',
                site_description: '',
                contact_email: '',
                contact_phone: '',
                address: '',
                facebook_url: '',
                line_url: '',
                youtube_url: '',
                tiktok_url: '',
            };
        }
        return { ...settings, id: settings.id.toString() };
    }
    async updateSiteSettings(data) {
        let settings = await this.prisma.site_settings.findFirst();
        if (settings) {
            settings = await this.prisma.site_settings.update({
                where: { id: settings.id },
                data,
            });
        }
        else {
            settings = await this.prisma.site_settings.create({ data });
        }
        return { ...settings, id: settings.id.toString() };
    }
    async getIndicators(page = 1, limit = 10, search) {
        const skip = (page - 1) * limit;
        const where = { deleted_at: null };
        if (search) {
            where.title = { contains: search };
        }
        const [indicators, total] = await Promise.all([
            this.prisma.indicators.findMany({
                where,
                skip,
                take: limit,
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.indicators.count({ where }),
        ]);
        return {
            data: indicators.map(i => ({
                ...i,
                id: i.id.toString(),
                category_id: i.category_id?.toString(),
                price: Number(i.price),
            })),
            meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
        };
    }
    async createIndicator(data) {
        const indicator = await this.prisma.indicators.create({ data });
        return { ...indicator, id: indicator.id.toString(), price: Number(indicator.price) };
    }
    async updateIndicator(id, data) {
        const indicator = await this.prisma.indicators.update({ where: { id }, data });
        return { ...indicator, id: indicator.id.toString(), price: Number(indicator.price) };
    }
    async deleteIndicator(id) {
        await this.prisma.indicators.update({ where: { id }, data: { deleted_at: new Date() } });
        return { success: true, message: 'Indicator deleted successfully' };
    }
    async getExpertAdvisors(page = 1, limit = 10, search) {
        const skip = (page - 1) * limit;
        const where = { deleted_at: null };
        if (search) {
            where.title = { contains: search };
        }
        const [eas, total] = await Promise.all([
            this.prisma.expert_advisors.findMany({
                where,
                skip,
                take: limit,
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.expert_advisors.count({ where }),
        ]);
        return {
            data: eas.map(e => ({
                ...e,
                id: e.id.toString(),
                category_id: e.category_id?.toString(),
                price: Number(e.price),
            })),
            meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
        };
    }
    async createExpertAdvisor(data) {
        const ea = await this.prisma.expert_advisors.create({ data });
        return { ...ea, id: ea.id.toString(), price: Number(ea.price) };
    }
    async updateExpertAdvisor(id, data) {
        const ea = await this.prisma.expert_advisors.update({ where: { id }, data });
        return { ...ea, id: ea.id.toString(), price: Number(ea.price) };
    }
    async deleteExpertAdvisor(id) {
        await this.prisma.expert_advisors.update({ where: { id }, data: { deleted_at: new Date() } });
        return { success: true, message: 'Expert Advisor deleted successfully' };
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminService);
//# sourceMappingURL=admin.service.js.map