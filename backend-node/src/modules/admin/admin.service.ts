import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
    constructor(private prisma: PrismaService) { }

    // ========================= DASHBOARD =========================
    async getDashboardStats() {
        const [
            usersCount,
            coursesCount,
            articlesCount,
            ebooksCount,
            productsCount,
            enrollmentsCount,
        ] = await Promise.all([
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

    // ========================= USERS =========================
    async getUsers(page = 1, limit = 10, search?: string, role?: string) {
        const skip = (page - 1) * limit;
        const where: any = {};

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

    async getUserById(id: bigint) {
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

        if (!user) throw new NotFoundException('User not found');
        return { ...user, id: user.id.toString() };
    }

    async createUser(data: { name: string; email: string; password: string; role?: string; phone?: string }) {
        const existingUser = await this.prisma.users.findUnique({ where: { email: data.email } });
        if (existingUser) throw new BadRequestException('Email already exists');

        const hashedPassword = await bcrypt.hash(data.password, 10);
        const user = await this.prisma.users.create({
            data: {
                name: data.name,
                email: data.email,
                password: hashedPassword,
                role: (data.role as any) || 'student',
                phone: data.phone,
            },
        });

        return { id: user.id.toString(), name: user.name, email: user.email, role: user.role };
    }

    async updateUser(id: bigint, data: { name?: string; email?: string; role?: string; phone?: string; password?: string }) {
        const updateData: any = { ...data };
        if (data.password) {
            updateData.password = await bcrypt.hash(data.password, 10);
        }

        const user = await this.prisma.users.update({
            where: { id },
            data: updateData,
        });

        return { id: user.id.toString(), name: user.name, email: user.email, role: user.role };
    }

    async deleteUser(id: bigint) {
        await this.prisma.users.delete({ where: { id } });
        return { success: true, message: 'User deleted successfully' };
    }

    // ========================= COURSES =========================
    async getCourses(page = 1, limit = 10, search?: string) {
        const skip = (page - 1) * limit;
        const where: any = { deleted_at: null };

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

    async getCourseById(id: bigint) {
        const course = await this.prisma.courses.findUnique({
            where: { id },
            include: { categories: true },
        });
        if (!course) throw new NotFoundException('Course not found');
        return {
            ...course,
            id: course.id.toString(),
            category_id: course.category_id?.toString(),
            price: Number(course.price),
            original_price: course.original_price ? Number(course.original_price) : null,
        };
    }

    async createCourse(data: any) {
        const course = await this.prisma.courses.create({ data });
        return { ...course, id: course.id.toString(), price: Number(course.price) };
    }

    async updateCourse(id: bigint, data: any) {
        const course = await this.prisma.courses.update({ where: { id }, data });
        return { ...course, id: course.id.toString(), price: Number(course.price) };
    }

    async deleteCourse(id: bigint) {
        await this.prisma.courses.update({ where: { id }, data: { deleted_at: new Date() } });
        return { success: true, message: 'Course deleted successfully' };
    }

    // ========================= ARTICLES =========================
    async getArticles(page = 1, limit = 10, search?: string) {
        const skip = (page - 1) * limit;
        const where: any = { deleted_at: null };

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

    async createArticle(data: any) {
        const article = await this.prisma.articles.create({ data });
        return { ...article, id: article.id.toString() };
    }

    async updateArticle(id: bigint, data: any) {
        const article = await this.prisma.articles.update({ where: { id }, data });
        return { ...article, id: article.id.toString() };
    }

    async deleteArticle(id: bigint) {
        await this.prisma.articles.update({ where: { id }, data: { deleted_at: new Date() } });
        return { success: true, message: 'Article deleted successfully' };
    }

    // ========================= EBOOKS =========================
    async getEbooks(page = 1, limit = 10, search?: string) {
        const skip = (page - 1) * limit;
        const where: any = { deleted_at: null };

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

    async createEbook(data: any) {
        const ebook = await this.prisma.ebooks.create({ data });
        return { ...ebook, id: ebook.id.toString(), price: Number(ebook.price) };
    }

    async updateEbook(id: bigint, data: any) {
        const ebook = await this.prisma.ebooks.update({ where: { id }, data });
        return { ...ebook, id: ebook.id.toString(), price: Number(ebook.price) };
    }

    async deleteEbook(id: bigint) {
        await this.prisma.ebooks.update({ where: { id }, data: { deleted_at: new Date() } });
        return { success: true, message: 'Ebook deleted successfully' };
    }

    // ========================= PRODUCTS =========================
    async getProducts(page = 1, limit = 10, search?: string, category?: string) {
        const skip = (page - 1) * limit;
        const where: any = { deleted_at: null };

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

    async createProduct(data: any) {
        const product = await this.prisma.products.create({ data });
        return { ...product, id: product.id.toString(), price: Number(product.price) };
    }

    async updateProduct(id: bigint, data: any) {
        const product = await this.prisma.products.update({ where: { id }, data });
        return { ...product, id: product.id.toString(), price: Number(product.price) };
    }

    async deleteProduct(id: bigint) {
        await this.prisma.products.update({ where: { id }, data: { deleted_at: new Date() } });
        return { success: true, message: 'Product deleted successfully' };
    }

    // ========================= CATEGORIES =========================
    async getCategories(type?: string) {
        const where: any = {};
        if (type) where.type = type;

        const categories = await this.prisma.categories.findMany({
            where,
            orderBy: { order: 'asc' },
        });

        return categories.map(c => ({ ...c, id: c.id.toString() }));
    }

    async createCategory(data: { name: string; slug: string; type?: string; description?: string; icon?: string; color?: string }) {
        const category = await this.prisma.categories.create({ data: data as any });
        return { ...category, id: category.id.toString() };
    }

    async updateCategory(id: bigint, data: any) {
        const category = await this.prisma.categories.update({ where: { id }, data });
        return { ...category, id: category.id.toString() };
    }

    async deleteCategory(id: bigint) {
        await this.prisma.categories.delete({ where: { id } });
        return { success: true, message: 'Category deleted successfully' };
    }

    // ========================= SITE SETTINGS =========================
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

    async updateSiteSettings(data: any) {
        let settings = await this.prisma.site_settings.findFirst();

        if (settings) {
            settings = await this.prisma.site_settings.update({
                where: { id: settings.id },
                data,
            });
        } else {
            settings = await this.prisma.site_settings.create({ data });
        }

        return { ...settings, id: settings.id.toString() };
    }

    // ========================= INDICATORS =========================
    async getIndicators(page = 1, limit = 10, search?: string) {
        const skip = (page - 1) * limit;
        const where: any = { deleted_at: null };

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

    async createIndicator(data: any) {
        const indicator = await this.prisma.indicators.create({ data });
        return { ...indicator, id: indicator.id.toString(), price: Number(indicator.price) };
    }

    async updateIndicator(id: bigint, data: any) {
        const indicator = await this.prisma.indicators.update({ where: { id }, data });
        return { ...indicator, id: indicator.id.toString(), price: Number(indicator.price) };
    }

    async deleteIndicator(id: bigint) {
        await this.prisma.indicators.update({ where: { id }, data: { deleted_at: new Date() } });
        return { success: true, message: 'Indicator deleted successfully' };
    }

    // ========================= EXPERT ADVISORS =========================
    async getExpertAdvisors(page = 1, limit = 10, search?: string) {
        const skip = (page - 1) * limit;
        const where: any = { deleted_at: null };

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

    async createExpertAdvisor(data: any) {
        const ea = await this.prisma.expert_advisors.create({ data });
        return { ...ea, id: ea.id.toString(), price: Number(ea.price) };
    }

    async updateExpertAdvisor(id: bigint, data: any) {
        const ea = await this.prisma.expert_advisors.update({ where: { id }, data });
        return { ...ea, id: ea.id.toString(), price: Number(ea.price) };
    }

    async deleteExpertAdvisor(id: bigint) {
        await this.prisma.expert_advisors.update({ where: { id }, data: { deleted_at: new Date() } });
        return { success: true, message: 'Expert Advisor deleted successfully' };
    }

    // ========================= ENROLLMENTS =========================
    async getEnrollments(page = 1, limit = 10, status?: string) {
        const where: any = {};
        if (status) where.status = status;

        const [enrollments, total] = await Promise.all([
            this.prisma.enrollments.findMany({
                where,
                skip: (page - 1) * limit,
                take: limit,
                orderBy: { created_at: 'desc' },
                include: {
                    users: { select: { id: true, name: true, email: true } },
                    courses: { select: { id: true, title: true } },
                },
            }),
            this.prisma.enrollments.count({ where }),
        ]);

        return {
            data: enrollments.map(e => ({
                ...e,
                id: e.id.toString(),
                user_id: e.user_id.toString(),
                course_id: e.course_id.toString(),
                users: e.users ? { ...e.users, id: e.users.id.toString() } : null,
                courses: e.courses ? { ...e.courses, id: e.courses.id.toString() } : null,
            })),
            meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
        };
    }

    async getEnrollmentById(id: bigint) {
        const enrollment = await this.prisma.enrollments.findUnique({
            where: { id },
            include: {
                users: { select: { id: true, name: true, email: true } },
                courses: { select: { id: true, title: true } },
            },
        });
        if (!enrollment) return null;
        return {
            ...enrollment,
            id: enrollment.id.toString(),
            user_id: enrollment.user_id.toString(),
            course_id: enrollment.course_id.toString(),
        };
    }

    async updateEnrollment(id: bigint, data: any) {
        const enrollment = await this.prisma.enrollments.update({ where: { id }, data });
        return { ...enrollment, id: enrollment.id.toString() };
    }

    // ========================= PROMOTIONS (using coupons table) =========================
    async getPromotions(page = 1, limit = 10) {
        const [coupons, total] = await Promise.all([
            this.prisma.coupons.findMany({
                where: { deleted_at: null },
                skip: (page - 1) * limit,
                take: limit,
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.coupons.count({ where: { deleted_at: null } }),
        ]);

        return {
            data: coupons.map(c => ({
                id: c.id.toString(),
                name: c.description || c.code,
                code: c.code,
                type: 'coupon',
                discount_type: c.type,
                discount_value: Number(c.value),
                min_purchase: c.min_purchase ? Number(c.min_purchase) : null,
                max_discount: c.max_discount ? Number(c.max_discount) : null,
                usage_limit: c.usage_limit,
                used_count: c.used_count,
                starts_at: c.valid_from,
                expires_at: c.valid_until,
                is_active: c.is_active,
                created_at: c.created_at,
            })),
            meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
        };
    }

    async getPromotionById(id: bigint) {
        const coupon = await this.prisma.coupons.findUnique({ where: { id } });
        if (!coupon) return null;
        return {
            id: coupon.id.toString(),
            name: coupon.description || coupon.code,
            code: coupon.code,
            discount_type: coupon.type,
            discount_value: Number(coupon.value),
            is_active: coupon.is_active,
        };
    }

    async createPromotion(data: any) {
        const coupon = await this.prisma.coupons.create({
            data: {
                code: data.code,
                description: data.name,
                type: data.discount_type || 'percentage',
                value: data.discount_value,
                min_purchase: data.min_purchase || 0,
                max_discount: data.max_discount,
                usage_limit: data.usage_limit,
                valid_from: data.starts_at,
                valid_until: data.expires_at,
                is_active: data.is_active ?? true,
            },
        });
        return { ...coupon, id: coupon.id.toString(), discount_value: Number(coupon.value) };
    }

    async updatePromotion(id: bigint, data: any) {
        const updateData: any = {};
        if (data.code) updateData.code = data.code;
        if (data.name) updateData.description = data.name;
        if (data.discount_type) updateData.type = data.discount_type;
        if (data.discount_value !== undefined) updateData.value = data.discount_value;
        if (data.is_active !== undefined) updateData.is_active = data.is_active;
        if (data.expires_at) updateData.valid_until = data.expires_at;

        const coupon = await this.prisma.coupons.update({ where: { id }, data: updateData });
        return { id: coupon.id.toString(), discount_value: Number(coupon.value) };
    }

    async deletePromotion(id: bigint) {
        await this.prisma.coupons.update({ where: { id }, data: { deleted_at: new Date() } });
        return { success: true, message: 'Promotion deleted successfully' };
    }
}

