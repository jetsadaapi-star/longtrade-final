import { ArticlesService } from './articles.service';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    findAll(page?: string, limit?: string): Promise<{
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
    findPopular(limit?: string): Promise<{
        success: boolean;
        data: any;
    }>;
    findByCategory(categorySlug: string, page?: string, limit?: string): Promise<{
        success: boolean;
        data: any;
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
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
