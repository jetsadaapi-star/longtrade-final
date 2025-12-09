import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { CoursesService } from './courses.service';

@ApiTags('Courses')
@Controller('v1/courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) { }

    @Get()
    @ApiOperation({ summary: 'Get all courses' })
    @ApiQuery({ name: 'page', required: false, type: Number })
    @ApiQuery({ name: 'limit', required: false, type: Number })
    @ApiQuery({ name: 'category', required: false, type: String })
    async findAll(
        @Query('page') page?: string,
        @Query('limit') limit?: string,
        @Query('category') category?: string,
    ) {
        return this.coursesService.findAll(
            parseInt(page || '1'),
            parseInt(limit || '10'),
            category,
        );
    }

    @Get('featured')
    @ApiOperation({ summary: 'Get featured courses' })
    async findFeatured(@Query('limit') limit?: string) {
        return this.coursesService.findFeatured(parseInt(limit || '6'));
    }

    @Get(':slug')
    @ApiOperation({ summary: 'Get course by slug' })
    async findBySlug(@Param('slug') slug: string) {
        return this.coursesService.findBySlug(slug);
    }
}
