import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { ArticlesService } from './articles.service';

@ApiTags('Articles')
@Controller('v1/articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) { }

    @Get()
    @ApiOperation({ summary: 'Get all articles' })
    @ApiQuery({ name: 'page', required: false, type: Number })
    @ApiQuery({ name: 'limit', required: false, type: Number })
    async findAll(
        @Query('page') page?: string,
        @Query('limit') limit?: string,
    ) {
        return this.articlesService.findAll(
            parseInt(page || '1'),
            parseInt(limit || '10'),
        );
    }

    @Get('featured')
    @ApiOperation({ summary: 'Get featured articles' })
    async findFeatured(@Query('limit') limit?: string) {
        return this.articlesService.findFeatured(parseInt(limit || '3'));
    }

    @Get('popular')
    @ApiOperation({ summary: 'Get popular articles' })
    async findPopular(@Query('limit') limit?: string) {
        return this.articlesService.findPopular(parseInt(limit || '5'));
    }

    @Get('category/:categorySlug')
    @ApiOperation({ summary: 'Get articles by category' })
    async findByCategory(
        @Param('categorySlug') categorySlug: string,
        @Query('page') page?: string,
        @Query('limit') limit?: string,
    ) {
        return this.articlesService.findByCategory(
            categorySlug,
            parseInt(page || '1'),
            parseInt(limit || '10'),
        );
    }

    @Get(':slug')
    @ApiOperation({ summary: 'Get article by slug' })
    async findBySlug(@Param('slug') slug: string) {
        return this.articlesService.findBySlug(slug);
    }
}
