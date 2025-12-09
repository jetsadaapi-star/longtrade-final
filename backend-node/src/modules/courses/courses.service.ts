import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CoursesService {
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

        const [courses, total] = await Promise.all([
            this.prisma.courses.findMany({
                where,
                skip,
                take: limit,
                orderBy: { order: 'asc' },
                include: {
                    categories: true,
                },
            }),
            this.prisma.courses.count({ where }),
        ]);

        return {
            success: true,
            data: this.serializeBigInt(courses),
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }

    async findFeatured(limit = 6) {
        const courses = await this.prisma.courses.findMany({
            where: {
                is_published: true,
                is_featured: true,
                deleted_at: null,
            },
            take: limit,
            orderBy: { order: 'asc' },
            include: {
                categories: true,
            },
        });

        return {
            success: true,
            data: this.serializeBigInt(courses),
        };
    }

    async findBySlug(slug: string) {
        const course = await this.prisma.courses.findFirst({
            where: {
                slug,
                is_published: true,
                deleted_at: null,
            },
            include: {
                categories: true,
            },
        });

        if (!course) {
            return { success: false, message: 'Course not found' };
        }

        return {
            success: true,
            data: this.serializeBigInt(course),
        };
    }

    private serializeBigInt(data: any) {
        return JSON.parse(JSON.stringify(data, (_, v) =>
            typeof v === 'bigint' ? v.toString() : v
        ));
    }
}
