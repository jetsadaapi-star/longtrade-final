import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) { }

    async findAll(page = 1, limit = 10, category?: string) {
        const skip = (page - 1) * limit;

        const where: any = {
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

    async findByCategory(category: string, page = 1, limit = 10) {
        const skip = (page - 1) * limit;

        const [products, total] = await Promise.all([
            this.prisma.products.findMany({
                where: {
                    category: category as any,
                    status: 'published',
                    deleted_at: null,
                },
                skip,
                take: limit,
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.products.count({
                where: {
                    category: category as any,
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

    async findBySlug(slug: string) {
        const product = await this.prisma.products.findFirst({
            where: { slug, status: 'published', deleted_at: null },
        });

        if (!product) {
            return { success: false, message: 'Product not found' };
        }

        // Increment view count
        await this.prisma.products.update({
            where: { id: product.id },
            data: { views_count: { increment: 1 } },
        });

        return { success: true, data: this.serializeBigInt(product) };
    }

    // Also include indicators
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

    async findIndicatorBySlug(slug: string) {
        const indicator = await this.prisma.indicators.findFirst({
            where: { slug, is_published: true, deleted_at: null },
            include: { categories: true },
        });

        if (!indicator) {
            return { success: false, message: 'Indicator not found' };
        }

        return { success: true, data: this.serializeBigInt(indicator) };
    }

    // Expert Advisors
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

    async findExpertAdvisorBySlug(slug: string) {
        const ea = await this.prisma.expert_advisors.findFirst({
            where: { slug, is_published: true, deleted_at: null },
            include: { categories: true },
        });

        if (!ea) {
            return { success: false, message: 'Expert Advisor not found' };
        }

        return { success: true, data: this.serializeBigInt(ea) };
    }

    private serializeBigInt(data: any) {
        return JSON.parse(JSON.stringify(data, (_, v) =>
            typeof v === 'bigint' ? v.toString() : v
        ));
    }
}
