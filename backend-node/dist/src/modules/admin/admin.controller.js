"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const admin_service_1 = require("./admin.service");
const admin_guard_1 = require("../auth/guards/admin.guard");
let AdminController = class AdminController {
    adminService;
    constructor(adminService) {
        this.adminService = adminService;
    }
    async getDashboardStats() {
        return this.adminService.getDashboardStats();
    }
    async getRecentActivity() {
        return this.adminService.getRecentActivity();
    }
    async getUsers(page, limit, search, role) {
        return this.adminService.getUsers(parseInt(page || '1'), parseInt(limit || '10'), search, role);
    }
    async getUserById(id) {
        return this.adminService.getUserById(BigInt(id));
    }
    async createUser(data) {
        return this.adminService.createUser(data);
    }
    async updateUser(id, data) {
        return this.adminService.updateUser(BigInt(id), data);
    }
    async deleteUser(id) {
        return this.adminService.deleteUser(BigInt(id));
    }
    async getCourses(page, limit, search) {
        return this.adminService.getCourses(parseInt(page || '1'), parseInt(limit || '10'), search);
    }
    async getCourseById(id) {
        return this.adminService.getCourseById(BigInt(id));
    }
    async createCourse(data) {
        return this.adminService.createCourse(data);
    }
    async updateCourse(id, data) {
        return this.adminService.updateCourse(BigInt(id), data);
    }
    async deleteCourse(id) {
        return this.adminService.deleteCourse(BigInt(id));
    }
    async getArticles(page, limit, search) {
        return this.adminService.getArticles(parseInt(page || '1'), parseInt(limit || '10'), search);
    }
    async createArticle(data) {
        return this.adminService.createArticle(data);
    }
    async updateArticle(id, data) {
        return this.adminService.updateArticle(BigInt(id), data);
    }
    async deleteArticle(id) {
        return this.adminService.deleteArticle(BigInt(id));
    }
    async getEbooks(page, limit, search) {
        return this.adminService.getEbooks(parseInt(page || '1'), parseInt(limit || '10'), search);
    }
    async createEbook(data) {
        return this.adminService.createEbook(data);
    }
    async updateEbook(id, data) {
        return this.adminService.updateEbook(BigInt(id), data);
    }
    async deleteEbook(id) {
        return this.adminService.deleteEbook(BigInt(id));
    }
    async getProducts(page, limit, search, category) {
        return this.adminService.getProducts(parseInt(page || '1'), parseInt(limit || '10'), search, category);
    }
    async createProduct(data) {
        return this.adminService.createProduct(data);
    }
    async updateProduct(id, data) {
        return this.adminService.updateProduct(BigInt(id), data);
    }
    async deleteProduct(id) {
        return this.adminService.deleteProduct(BigInt(id));
    }
    async getIndicators(page, limit, search) {
        return this.adminService.getIndicators(parseInt(page || '1'), parseInt(limit || '10'), search);
    }
    async createIndicator(data) {
        return this.adminService.createIndicator(data);
    }
    async updateIndicator(id, data) {
        return this.adminService.updateIndicator(BigInt(id), data);
    }
    async deleteIndicator(id) {
        return this.adminService.deleteIndicator(BigInt(id));
    }
    async getExpertAdvisors(page, limit, search) {
        return this.adminService.getExpertAdvisors(parseInt(page || '1'), parseInt(limit || '10'), search);
    }
    async createExpertAdvisor(data) {
        return this.adminService.createExpertAdvisor(data);
    }
    async updateExpertAdvisor(id, data) {
        return this.adminService.updateExpertAdvisor(BigInt(id), data);
    }
    async deleteExpertAdvisor(id) {
        return this.adminService.deleteExpertAdvisor(BigInt(id));
    }
    async getCategories(type) {
        return this.adminService.getCategories(type);
    }
    async createCategory(data) {
        return this.adminService.createCategory(data);
    }
    async updateCategory(id, data) {
        return this.adminService.updateCategory(BigInt(id), data);
    }
    async deleteCategory(id) {
        return this.adminService.deleteCategory(BigInt(id));
    }
    async getSiteSettings() {
        return this.adminService.getSiteSettings();
    }
    async updateSiteSettings(data) {
        return this.adminService.updateSiteSettings(data);
    }
    async getEnrollments(page, limit, status) {
        return this.adminService.getEnrollments(parseInt(page || '1'), parseInt(limit || '10'), status);
    }
    async getEnrollmentById(id) {
        return this.adminService.getEnrollmentById(BigInt(id));
    }
    async updateEnrollment(id, data) {
        return this.adminService.updateEnrollment(BigInt(id), data);
    }
    async getPromotions(page, limit) {
        return this.adminService.getPromotions(parseInt(page || '1'), parseInt(limit || '10'));
    }
    async getPromotionById(id) {
        return this.adminService.getPromotionById(BigInt(id));
    }
    async createPromotion(data) {
        return this.adminService.createPromotion(data);
    }
    async updatePromotion(id, data) {
        return this.adminService.updatePromotion(BigInt(id), data);
    }
    async deletePromotion(id) {
        return this.adminService.deletePromotion(BigInt(id));
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Get)('dashboard/stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get dashboard statistics' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getDashboardStats", null);
__decorate([
    (0, common_1.Get)('dashboard/activity'),
    (0, swagger_1.ApiOperation)({ summary: 'Get recent activity' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getRecentActivity", null);
__decorate([
    (0, common_1.Get)('users'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all users' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'role', required: false }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __param(3, (0, common_1.Query)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('users/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Post)('users'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new user' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createUser", null);
__decorate([
    (0, common_1.Put)('users/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update user' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)('users/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete user' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Get)('courses'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all courses' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getCourses", null);
__decorate([
    (0, common_1.Get)('courses/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get course by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getCourseById", null);
__decorate([
    (0, common_1.Post)('courses'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new course' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createCourse", null);
__decorate([
    (0, common_1.Put)('courses/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update course' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateCourse", null);
__decorate([
    (0, common_1.Delete)('courses/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete course' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteCourse", null);
__decorate([
    (0, common_1.Get)('articles'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all articles' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getArticles", null);
__decorate([
    (0, common_1.Post)('articles'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new article' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createArticle", null);
__decorate([
    (0, common_1.Put)('articles/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update article' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateArticle", null);
__decorate([
    (0, common_1.Delete)('articles/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete article' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteArticle", null);
__decorate([
    (0, common_1.Get)('ebooks'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all ebooks' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getEbooks", null);
__decorate([
    (0, common_1.Post)('ebooks'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new ebook' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createEbook", null);
__decorate([
    (0, common_1.Put)('ebooks/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update ebook' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateEbook", null);
__decorate([
    (0, common_1.Delete)('ebooks/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete ebook' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteEbook", null);
__decorate([
    (0, common_1.Get)('products'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all products' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __param(3, (0, common_1.Query)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Post)('products'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new product' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Put)('products/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update product' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)('products/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete product' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteProduct", null);
__decorate([
    (0, common_1.Get)('indicators'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all indicators' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getIndicators", null);
__decorate([
    (0, common_1.Post)('indicators'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new indicator' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createIndicator", null);
__decorate([
    (0, common_1.Put)('indicators/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update indicator' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateIndicator", null);
__decorate([
    (0, common_1.Delete)('indicators/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete indicator' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteIndicator", null);
__decorate([
    (0, common_1.Get)('expert-advisors'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all expert advisors' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getExpertAdvisors", null);
__decorate([
    (0, common_1.Post)('expert-advisors'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new expert advisor' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createExpertAdvisor", null);
__decorate([
    (0, common_1.Put)('expert-advisors/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update expert advisor' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateExpertAdvisor", null);
__decorate([
    (0, common_1.Delete)('expert-advisors/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete expert advisor' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteExpertAdvisor", null);
__decorate([
    (0, common_1.Get)('categories'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all categories' }),
    __param(0, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Post)('categories'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new category' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createCategory", null);
__decorate([
    (0, common_1.Put)('categories/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update category' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateCategory", null);
__decorate([
    (0, common_1.Delete)('categories/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete category' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteCategory", null);
__decorate([
    (0, common_1.Get)('site-settings'),
    (0, swagger_1.ApiOperation)({ summary: 'Get site settings' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getSiteSettings", null);
__decorate([
    (0, common_1.Put)('site-settings'),
    (0, swagger_1.ApiOperation)({ summary: 'Update site settings' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateSiteSettings", null);
__decorate([
    (0, common_1.Get)('enrollments'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all enrollments' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getEnrollments", null);
__decorate([
    (0, common_1.Get)('enrollments/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get enrollment by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getEnrollmentById", null);
__decorate([
    (0, common_1.Put)('enrollments/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update enrollment' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateEnrollment", null);
__decorate([
    (0, common_1.Get)('promotions'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all promotions' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getPromotions", null);
__decorate([
    (0, common_1.Get)('promotions/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get promotion by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getPromotionById", null);
__decorate([
    (0, common_1.Post)('promotions'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new promotion' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createPromotion", null);
__decorate([
    (0, common_1.Put)('promotions/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update promotion' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updatePromotion", null);
__decorate([
    (0, common_1.Delete)('promotions/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete promotion' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deletePromotion", null);
exports.AdminController = AdminController = __decorate([
    (0, swagger_1.ApiTags)('Admin'),
    (0, common_1.Controller)('v1/admin'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map