import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAllProducts(page?: string, limit?: string): Promise<{
        success: boolean;
        data: any;
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findFeaturedProducts(limit?: string): Promise<{
        success: boolean;
        data: any;
    }>;
    findProductsByCategory(category: string, page?: string, limit?: string): Promise<{
        success: boolean;
        data: any;
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findProductBySlug(slug: string): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        data: any;
        message?: undefined;
    }>;
    findAllIndicators(page?: string, limit?: string): Promise<{
        success: boolean;
        data: any;
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findIndicatorBySlug(slug: string): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        data: any;
        message?: undefined;
    }>;
    findAllExpertAdvisors(page?: string, limit?: string): Promise<{
        success: boolean;
        data: any;
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findExpertAdvisorBySlug(slug: string): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        data: any;
        message?: undefined;
    }>;
}
