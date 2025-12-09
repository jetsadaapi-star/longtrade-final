import { CoursesService } from './courses.service';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    findAll(page?: string, limit?: string, category?: string): Promise<{
        success: boolean;
        data: any;
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findFeatured(limit?: string): Promise<{
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
}
