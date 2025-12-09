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
exports.ArticlesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ArticlesService = class ArticlesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(page = 1, limit = 10, category) {
        const skip = (page - 1) * limit;
        const where = {
            is_published: true,
            deleted_at: null,
        };
        if (category) {
            where.categories = { slug: category };
        }
        const [articles, total] = await Promise.all([
            this.prisma.articles.findMany({
                where,
                skip,
                take: limit,
                orderBy: { published_at: 'desc' },
                include: {
                    categories: true,
                },
            }),
            this.prisma.articles.count({ where }),
        ]);
        return {
            success: true,
            data: this.serializeBigInt(articles),
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findFeatured(limit = 3) {
        const articles = await this.prisma.articles.findMany({
            where: {
                is_published: true,
                is_featured: true,
                deleted_at: null,
            },
            take: limit,
            orderBy: { published_at: 'desc' },
            include: {
                categories: true,
            },
        });
        return {
            success: true,
            data: this.serializeBigInt(articles),
        };
    }
    async findPopular(limit = 5) {
        const articles = await this.prisma.articles.findMany({
            where: {
                is_published: true,
                deleted_at: null,
            },
            take: limit,
            orderBy: { views_count: 'desc' },
            include: {
                categories: true,
            },
        });
        return {
            success: true,
            data: this.serializeBigInt(articles),
        };
    }
    async findBySlug(slug) {
        const article = await this.prisma.articles.findFirst({
            where: {
                slug,
                is_published: true,
                deleted_at: null,
            },
            include: {
                categories: true,
            },
        });
        if (!article) {
            return { success: false, message: 'Article not found' };
        }
        await this.prisma.articles.update({
            where: { id: article.id },
            data: { views_count: { increment: 1 } },
        });
        return {
            success: true,
            data: this.serializeBigInt(article),
        };
    }
    async findByCategory(categorySlug, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [articles, total] = await Promise.all([
            this.prisma.articles.findMany({
                where: {
                    is_published: true,
                    deleted_at: null,
                    categories: { slug: categorySlug },
                },
                skip,
                take: limit,
                orderBy: { published_at: 'desc' },
                include: {
                    categories: true,
                },
            }),
            this.prisma.articles.count({
                where: {
                    is_published: true,
                    deleted_at: null,
                    categories: { slug: categorySlug },
                },
            }),
        ]);
        return {
            success: true,
            data: this.serializeBigInt(articles),
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    serializeBigInt(data) {
        return JSON.parse(JSON.stringify(data, (_, v) => typeof v === 'bigint' ? v.toString() : v));
    }
};
exports.ArticlesService = ArticlesService;
exports.ArticlesService = ArticlesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ArticlesService);
//# sourceMappingURL=articles.service.js.map