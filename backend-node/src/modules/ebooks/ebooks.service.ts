import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EbooksService {
    constructor(private prisma: PrismaService) { }

    async findAll(page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [ebooks, total] = await Promise.all([
            this.prisma.ebooks.findMany({
                where: { is_published: true, deleted_at: null },
                skip,
                take: limit,
                orderBy: { created_at: 'desc' },
                include: { categories: true },
            }),
            this.prisma.ebooks.count({ where: { is_published: true, deleted_at: null } }),
        ]);

        return {
            success: true,
            data: this.serializeBigInt(ebooks),
            meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
        };
    }

    async findFeatured(limit = 3) {
        const ebooks = await this.prisma.ebooks.findMany({
            where: { is_published: true, is_featured: true, deleted_at: null },
            take: limit,
            orderBy: { created_at: 'desc' },
            include: { categories: true },
        });

        return { success: true, data: this.serializeBigInt(ebooks) };
    }

    async findBySlug(slug: string) {
        const ebook = await this.prisma.ebooks.findFirst({
            where: { slug, is_published: true, deleted_at: null },
            include: { categories: true },
        });

        if (!ebook) {
            return { success: false, message: 'Ebook not found' };
        }

        // Increment view count
        await this.prisma.ebooks.update({
            where: { id: ebook.id },
            data: { views_count: { increment: 1 } },
        });

        return { success: true, data: this.serializeBigInt(ebook) };
    }

    private serializeBigInt(data: any) {
        return JSON.parse(JSON.stringify(data, (_, v) =>
            typeof v === 'bigint' ? v.toString() : v
        ));
    }
}
