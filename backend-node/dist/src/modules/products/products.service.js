"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductsService = class ProductsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(page = 1, limit = 10, category) {
        const skip = (page - 1) * limit;
        const where = {
            status: 'published',
            deleted_at: null,
        };
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
            success: true,
            data: this.serializeBigInt(products),
            meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
        };
    }
    async findFeatured(limit = 6) {
        const products = await this.prisma.products.findMany({
            where: {
                status: 'published',
                is_featured: true,
                deleted_at: null,
            },
            take: limit,
            orderBy: { created_at: 'desc' },
        });
        return { success: true, data: this.serializeBigInt(products) };
    }
    async findByCategory(category, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [products, total] = await Promise.all([
            this.prisma.products.findMany({
                where: {
                    category: category,
                    status: 'published',
                    deleted_at: null,
                },
                skip,
                take: limit,
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.products.count({
                where: {
                    category: category,
                    status: 'published',
                    deleted_at: null,
                },
            }),
        ]);
        return {
            success: true,
            data: this.serializeBigInt(products),
            meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
        };
    }
    async findBySlug(slug) {
        const product = await this.prisma.products.findFirst({
            where: { slug, status: 'published', deleted_at: null },
        });
        if (!product) {
            return { success: false, message: 'Product not found' };
        }
        await this.prisma.products.update({
            where: { id: product.id },
            data: { views_count: { increment: 1 } },
        });
        return { success: true, data: this.serializeBigInt(product) };
    }
    async findIndicators(page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [indicators, total] = await Promise.all([
            this.prisma.indicators.findMany({
                where: { is_published: true, deleted_at: null },
                skip,
                take: limit,
                orderBy: { created_at: 'desc' },
                include: { categories: true },
            }),
            this.prisma.indicators.count({
                where: { is_published: true, deleted_at: null },
            }),
        ]);
        return {
            success: true,
            data: this.serializeBigInt(indicators),
            meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
        };
    }
    async findIndicatorBySlug(slug) {
        const indicator = await this.prisma.indicators.findFirst({
            where: { slug, is_published: true, deleted_at: null },
            include: { categories: true },
        });
        if (!indicator) {
            return { success: false, message: 'Indicator not found' };
        }
        return { success: true, data: this.serializeBigInt(indicator) };
    }
    async findExpertAdvisors(page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [eas, total] = await Promise.all([
            this.prisma.expert_advisors.findMany({
                where: { is_published: true, deleted_at: null },
                skip,
                take: limit,
                orderBy: { created_at: 'desc' },
                include: { categories: true },
            }),
            this.prisma.expert_advisors.count({
                where: { is_published: true, deleted_at: null },
            }),
        ]);
        return {
            success: true,
            data: this.serializeBigInt(eas),
            meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
        };
    }
    async findExpertAdvisorBySlug(slug) {
        const ea = await this.prisma.expert_advisors.findFirst({
            where: { slug, is_published: true, deleted_at: null },
            include: { categories: true },
        });
        if (!ea) {
            return { success: false, message: 'Expert Advisor not found' };
        }
        return { success: true, data: this.serializeBigInt(ea) };
    }
    serializeBigInt(data) {
        return JSON.parse(JSON.stringify(data, (_, v) => typeof v === 'bigint' ? v.toString() : v));
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map