import { PrismaService } from '../prisma/prisma.service';
export declare class CoursesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(page?: number, limit?: number, category?: string): Promise<{
        success: boolean;
        data: any;
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findFeatured(limit?: number): Promise<{
        success: boolean;
        data: any;
    }>;
    findBySlug(slug: string): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        data: any;
        message?: undefined;
    }>;
    private serializeBigInt;
}
