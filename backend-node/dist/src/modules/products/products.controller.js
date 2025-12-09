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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const products_service_1 = require("./products.service");
let ProductsController = class ProductsController {
    productsService;
    constructor(productsService) {
        this.productsService = productsService;
    }
    async findAllProducts(page, limit) {
        return this.productsService.findAll(parseInt(page || '1'), parseInt(limit || '10'));
    }
    async findFeaturedProducts(limit) {
        return this.productsService.findFeatured(parseInt(limit || '6'));
    }
    async findProductsByCategory(category, page, limit) {
        return this.productsService.findByCategory(category, parseInt(page || '1'), parseInt(limit || '10'));
    }
    async findProductBySlug(slug) {
        return this.productsService.findBySlug(slug);
    }
    async findAllIndicators(page, limit) {
        return this.productsService.findIndicators(parseInt(page || '1'), parseInt(limit || '10'));
    }
    async findIndicatorBySlug(slug) {
        return this.productsService.findIndicatorBySlug(slug);
    }
    async findAllExpertAdvisors(page, limit) {
        return this.productsService.findExpertAdvisors(parseInt(page || '1'), parseInt(limit || '10'));
    }
    async findExpertAdvisorBySlug(slug) {
        return this.productsService.findExpertAdvisorBySlug(slug);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Get)('products'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all products' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findAllProducts", null);
__decorate([
    (0, common_1.Get)('products/featured'),
    (0, swagger_1.ApiOperation)({ summary: 'Get featured products' }),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findFeaturedProducts", null);
__decorate([
    (0, common_1.Get)('products/category/:category'),
    (0, swagger_1.ApiOperation)({ summary: 'Get products by category' }),
    __param(0, (0, common_1.Param)('category')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findProductsByCategory", null);
__decorate([
    (0, common_1.Get)('products/:slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get product by slug' }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findProductBySlug", null);
__decorate([
    (0, common_1.Get)('indicators'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all indicators' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findAllIndicators", null);
__decorate([
    (0, common_1.Get)('indicators/:slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get indicator by slug' }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findIndicatorBySlug", null);
__decorate([
    (0, common_1.Get)('expert-advisors'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all expert advisors' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findAllExpertAdvisors", null);
__decorate([
    (0, common_1.Get)('expert-advisors/:slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get expert advisor by slug' }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findExpertAdvisorBySlug", null);
exports.ProductsController = ProductsController = __decorate([
    (0, swagger_1.ApiTags)('Products'),
    (0, common_1.Controller)('v1'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map