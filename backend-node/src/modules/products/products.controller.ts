import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { ProductsService } from './products.service';

@ApiTags('Products')
@Controller('v1')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    // Products
    @Get('products')
    @ApiOperation({ summary: 'Get all products' })
    async findAllProducts(@Query('page') page?: string, @Query('limit') limit?: string) {
        return this.productsService.findAll(parseInt(page || '1'), parseInt(limit || '10'));
    }

    @Get('products/featured')
    @ApiOperation({ summary: 'Get featured products' })
    async findFeaturedProducts(@Query('limit') limit?: string) {
        return this.productsService.findFeatured(parseInt(limit || '6'));
    }

    @Get('products/category/:category')
    @ApiOperation({ summary: 'Get products by category' })
    async findProductsByCategory(
        @Param('category') category: string,
        @Query('page') page?: string,
        @Query('limit') limit?: string,
    ) {
        return this.productsService.findByCategory(category, parseInt(page || '1'), parseInt(limit || '10'));
    }

    @Get('products/:slug')
    @ApiOperation({ summary: 'Get product by slug' })
    async findProductBySlug(@Param('slug') slug: string) {
        return this.productsService.findBySlug(slug);
    }

    // Indicators
    @Get('indicators')
    @ApiOperation({ summary: 'Get all indicators' })
    async findAllIndicators(@Query('page') page?: string, @Query('limit') limit?: string) {
        return this.productsService.findIndicators(parseInt(page || '1'), parseInt(limit || '10'));
    }

    @Get('indicators/:slug')
    @ApiOperation({ summary: 'Get indicator by slug' })
    async findIndicatorBySlug(@Param('slug') slug: string) {
        return this.productsService.findIndicatorBySlug(slug);
    }

    // Expert Advisors
    @Get('expert-advisors')
    @ApiOperation({ summary: 'Get all expert advisors' })
    async findAllExpertAdvisors(@Query('page') page?: string, @Query('limit') limit?: string) {
        return this.productsService.findExpertAdvisors(parseInt(page || '1'), parseInt(limit || '10'));
    }

    @Get('expert-advisors/:slug')
    @ApiOperation({ summary: 'Get expert advisor by slug' })
    async findExpertAdvisorBySlug(@Param('slug') slug: string) {
        return this.productsService.findExpertAdvisorBySlug(slug);
    }
}
