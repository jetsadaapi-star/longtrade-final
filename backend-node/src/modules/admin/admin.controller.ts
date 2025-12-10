import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { AdminGuard } from '../auth/guards/admin.guard';

@ApiTags('Admin')
@Controller('v1/admin')
@UseGuards(AdminGuard)
@ApiBearerAuth()
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    // ========================= DASHBOARD =========================
    @Get('dashboard/stats')
    @ApiOperation({ summary: 'Get dashboard statistics' })
    async getDashboardStats() {
        return this.adminService.getDashboardStats();
    }

    @Get('dashboard/activity')
    @ApiOperation({ summary: 'Get recent activity' })
    async getRecentActivity() {
        return this.adminService.getRecentActivity();
    }

    // ========================= USERS =========================
    @Get('users')
    @ApiOperation({ summary: 'Get all users' })
    @ApiQuery({ name: 'page', required: false })
    @ApiQuery({ name: 'limit', required: false })
    @ApiQuery({ name: 'search', required: false })
    @ApiQuery({ name: 'role', required: false })
    async getUsers(
        @Query('page') page?: string,
        @Query('limit') limit?: string,
        @Query('search') search?: string,
        @Query('role') role?: string,
    ) {
        return this.adminService.getUsers(
            parseInt(page || '1'),
            parseInt(limit || '10'),
            search,
            role,
        );
    }

    @Get('users/:id')
    @ApiOperation({ summary: 'Get user by ID' })
    async getUserById(@Param('id') id: string) {
        return this.adminService.getUserById(BigInt(id));
    }

    @Post('users')
    @ApiOperation({ summary: 'Create a new user' })
    async createUser(@Body() data: { name: string; email: string; password: string; role?: string; phone?: string }) {
        return this.adminService.createUser(data);
    }

    @Put('users/:id')
    @ApiOperation({ summary: 'Update user' })
    async updateUser(@Param('id') id: string, @Body() data: any) {
        return this.adminService.updateUser(BigInt(id), data);
    }

    @Delete('users/:id')
    @ApiOperation({ summary: 'Delete user' })
    async deleteUser(@Param('id') id: string) {
        return this.adminService.deleteUser(BigInt(id));
    }

    // ========================= COURSES =========================
    @Get('courses')
    @ApiOperation({ summary: 'Get all courses' })
    async getCourses(
        @Query('page') page?: string,
        @Query('limit') limit?: string,
        @Query('search') search?: string,
    ) {
        return this.adminService.getCourses(parseInt(page || '1'), parseInt(limit || '10'), search);
    }

    @Get('courses/:id')
    @ApiOperation({ summary: 'Get course by ID' })
    async getCourseById(@Param('id') id: string) {
        return this.adminService.getCourseById(BigInt(id));
    }

    @Post('courses')
    @ApiOperation({ summary: 'Create a new course' })
    async createCourse(@Body() data: any) {
        return this.adminService.createCourse(data);
    }

    @Put('courses/:id')
    @ApiOperation({ summary: 'Update course' })
    async updateCourse(@Param('id') id: string, @Body() data: any) {
        return this.adminService.updateCourse(BigInt(id), data);
    }

    @Delete('courses/:id')
    @ApiOperation({ summary: 'Delete course' })
    async deleteCourse(@Param('id') id: string) {
        return this.adminService.deleteCourse(BigInt(id));
    }

    // ========================= ARTICLES =========================
    @Get('articles')
    @ApiOperation({ summary: 'Get all articles' })
    async getArticles(
        @Query('page') page?: string,
        @Query('limit') limit?: string,
        @Query('search') search?: string,
    ) {
        return this.adminService.getArticles(parseInt(page || '1'), parseInt(limit || '10'), search);
    }

    @Post('articles')
    @ApiOperation({ summary: 'Create a new article' })
    async createArticle(@Body() data: any) {
        return this.adminService.createArticle(data);
    }

    @Put('articles/:id')
    @ApiOperation({ summary: 'Update article' })
    async updateArticle(@Param('id') id: string, @Body() data: any) {
        return this.adminService.updateArticle(BigInt(id), data);
    }

    @Delete('articles/:id')
    @ApiOperation({ summary: 'Delete article' })
    async deleteArticle(@Param('id') id: string) {
        return this.adminService.deleteArticle(BigInt(id));
    }

    // ========================= EBOOKS =========================
    @Get('ebooks')
    @ApiOperation({ summary: 'Get all ebooks' })
    async getEbooks(
        @Query('page') page?: string,
        @Query('limit') limit?: string,
        @Query('search') search?: string,
    ) {
        return this.adminService.getEbooks(parseInt(page || '1'), parseInt(limit || '10'), search);
    }

    @Post('ebooks')
    @ApiOperation({ summary: 'Create a new ebook' })
    async createEbook(@Body() data: any) {
        return this.adminService.createEbook(data);
    }

    @Put('ebooks/:id')
    @ApiOperation({ summary: 'Update ebook' })
    async updateEbook(@Param('id') id: string, @Body() data: any) {
        return this.adminService.updateEbook(BigInt(id), data);
    }

    @Delete('ebooks/:id')
    @ApiOperation({ summary: 'Delete ebook' })
    async deleteEbook(@Param('id') id: string) {
        return this.adminService.deleteEbook(BigInt(id));
    }

    // ========================= PRODUCTS =========================
    @Get('products')
    @ApiOperation({ summary: 'Get all products' })
    async getProducts(
        @Query('page') page?: string,
        @Query('limit') limit?: string,
        @Query('search') search?: string,
        @Query('category') category?: string,
    ) {
        return this.adminService.getProducts(parseInt(page || '1'), parseInt(limit || '10'), search, category);
    }

    @Post('products')
    @ApiOperation({ summary: 'Create a new product' })
    async createProduct(@Body() data: any) {
        return this.adminService.createProduct(data);
    }

    @Put('products/:id')
    @ApiOperation({ summary: 'Update product' })
    async updateProduct(@Param('id') id: string, @Body() data: any) {
        return this.adminService.updateProduct(BigInt(id), data);
    }

    @Delete('products/:id')
    @ApiOperation({ summary: 'Delete product' })
    async deleteProduct(@Param('id') id: string) {
        return this.adminService.deleteProduct(BigInt(id));
    }

    // ========================= INDICATORS =========================
    @Get('indicators')
    @ApiOperation({ summary: 'Get all indicators' })
    async getIndicators(
        @Query('page') page?: string,
        @Query('limit') limit?: string,
        @Query('search') search?: string,
    ) {
        return this.adminService.getIndicators(parseInt(page || '1'), parseInt(limit || '10'), search);
    }

    @Post('indicators')
    @ApiOperation({ summary: 'Create a new indicator' })
    async createIndicator(@Body() data: any) {
        return this.adminService.createIndicator(data);
    }

    @Put('indicators/:id')
    @ApiOperation({ summary: 'Update indicator' })
    async updateIndicator(@Param('id') id: string, @Body() data: any) {
        return this.adminService.updateIndicator(BigInt(id), data);
    }

    @Delete('indicators/:id')
    @ApiOperation({ summary: 'Delete indicator' })
    async deleteIndicator(@Param('id') id: string) {
        return this.adminService.deleteIndicator(BigInt(id));
    }

    // ========================= EXPERT ADVISORS =========================
    @Get('expert-advisors')
    @ApiOperation({ summary: 'Get all expert advisors' })
    async getExpertAdvisors(
        @Query('page') page?: string,
        @Query('limit') limit?: string,
        @Query('search') search?: string,
    ) {
        return this.adminService.getExpertAdvisors(parseInt(page || '1'), parseInt(limit || '10'), search);
    }

    @Post('expert-advisors')
    @ApiOperation({ summary: 'Create a new expert advisor' })
    async createExpertAdvisor(@Body() data: any) {
        return this.adminService.createExpertAdvisor(data);
    }

    @Put('expert-advisors/:id')
    @ApiOperation({ summary: 'Update expert advisor' })
    async updateExpertAdvisor(@Param('id') id: string, @Body() data: any) {
        return this.adminService.updateExpertAdvisor(BigInt(id), data);
    }

    @Delete('expert-advisors/:id')
    @ApiOperation({ summary: 'Delete expert advisor' })
    async deleteExpertAdvisor(@Param('id') id: string) {
        return this.adminService.deleteExpertAdvisor(BigInt(id));
    }

    // ========================= CATEGORIES =========================
    @Get('categories')
    @ApiOperation({ summary: 'Get all categories' })
    async getCategories(@Query('type') type?: string) {
        return this.adminService.getCategories(type);
    }

    @Post('categories')
    @ApiOperation({ summary: 'Create a new category' })
    async createCategory(@Body() data: { name: string; slug: string; type?: string; description?: string; icon?: string; color?: string }) {
        return this.adminService.createCategory(data);
    }

    @Put('categories/:id')
    @ApiOperation({ summary: 'Update category' })
    async updateCategory(@Param('id') id: string, @Body() data: any) {
        return this.adminService.updateCategory(BigInt(id), data);
    }

    @Delete('categories/:id')
    @ApiOperation({ summary: 'Delete category' })
    async deleteCategory(@Param('id') id: string) {
        return this.adminService.deleteCategory(BigInt(id));
    }

    // ========================= SITE SETTINGS =========================
    @Get('site-settings')
    @ApiOperation({ summary: 'Get site settings' })
    async getSiteSettings() {
        return this.adminService.getSiteSettings();
    }

    @Put('site-settings')
    @ApiOperation({ summary: 'Update site settings' })
    async updateSiteSettings(@Body() data: any) {
        return this.adminService.updateSiteSettings(data);
    }

    // ========================= ENROLLMENTS =========================
    @Get('enrollments')
    @ApiOperation({ summary: 'Get all enrollments' })
    async getEnrollments(
        @Query('page') page?: string,
        @Query('limit') limit?: string,
        @Query('status') status?: string,
    ) {
        return this.adminService.getEnrollments(parseInt(page || '1'), parseInt(limit || '10'), status);
    }

    @Get('enrollments/:id')
    @ApiOperation({ summary: 'Get enrollment by ID' })
    async getEnrollmentById(@Param('id') id: string) {
        return this.adminService.getEnrollmentById(BigInt(id));
    }

    @Put('enrollments/:id')
    @ApiOperation({ summary: 'Update enrollment' })
    async updateEnrollment(@Param('id') id: string, @Body() data: any) {
        return this.adminService.updateEnrollment(BigInt(id), data);
    }

    // ========================= PROMOTIONS =========================
    @Get('promotions')
    @ApiOperation({ summary: 'Get all promotions' })
    async getPromotions(
        @Query('page') page?: string,
        @Query('limit') limit?: string,
    ) {
        return this.adminService.getPromotions(parseInt(page || '1'), parseInt(limit || '10'));
    }

    @Get('promotions/:id')
    @ApiOperation({ summary: 'Get promotion by ID' })
    async getPromotionById(@Param('id') id: string) {
        return this.adminService.getPromotionById(BigInt(id));
    }

    @Post('promotions')
    @ApiOperation({ summary: 'Create a new promotion' })
    async createPromotion(@Body() data: any) {
        return this.adminService.createPromotion(data);
    }

    @Put('promotions/:id')
    @ApiOperation({ summary: 'Update promotion' })
    async updatePromotion(@Param('id') id: string, @Body() data: any) {
        return this.adminService.updatePromotion(BigInt(id), data);
    }

    @Delete('promotions/:id')
    @ApiOperation({ summary: 'Delete promotion' })
    async deletePromotion(@Param('id') id: string) {
        return this.adminService.deletePromotion(BigInt(id));
    }
}

