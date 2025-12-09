import { EbooksService } from './ebooks.service';
export declare class EbooksController {
    private readonly ebooksService;
    constructor(ebooksService: EbooksService);
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
