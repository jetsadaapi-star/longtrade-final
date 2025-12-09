import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { EbooksService } from './ebooks.service';

@ApiTags('Ebooks')
@Controller('v1/ebooks')
export class EbooksController {
    constructor(private readonly ebooksService: EbooksService) { }

    @Get()
    @ApiOperation({ summary: 'Get all ebooks' })
    async findAll(@Query('page') page?: string, @Query('limit') limit?: string) {
        return this.ebooksService.findAll(parseInt(page || '1'), parseInt(limit || '10'));
    }

    @Get('featured')
    @ApiOperation({ summary: 'Get featured ebooks' })
    async findFeatured(@Query('limit') limit?: string) {
        return this.ebooksService.findFeatured(parseInt(limit || '3'));
    }

    @Get(':slug')
    @ApiOperation({ summary: 'Get ebook by slug' })
    async findBySlug(@Param('slug') slug: string) {
        return this.ebooksService.findBySlug(slug);
    }
}
