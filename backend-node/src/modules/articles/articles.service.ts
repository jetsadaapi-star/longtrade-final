import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ArticlesService {
    constructor(private prisma: PrismaService) { }

    async findAll(page = 1, limit = 10, category?: string) {
        const skip = (page - 1) * limit;

        const where: any = {
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

    async findBySlug(slug: string) {
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

        // Increment view count
        await this.prisma.articles.update({
            where: { id: article.id },
            data: { views_count: { increment: 1 } },
        });

        return {
            success: true,
            data: this.serializeBigInt(article),
        };
    }

    async findByCategory(categorySlug: string, page = 1, limit = 10) {
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

    private serializeBigInt(data: any) {
        return JSON.parse(JSON.stringify(data, (_, v) =>
            typeof v === 'bigint' ? v.toString() : v
        ));
    }
}
