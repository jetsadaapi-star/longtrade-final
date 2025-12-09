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
exports.ArticlesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const articles_service_1 = require("./articles.service");
let ArticlesController = class ArticlesController {
    articlesService;
    constructor(articlesService) {
        this.articlesService = articlesService;
    }
    async findAll(page, limit) {
        return this.articlesService.findAll(parseInt(page || '1'), parseInt(limit || '10'));
    }
    async findFeatured(limit) {
        return this.articlesService.findFeatured(parseInt(limit || '3'));
    }
    async findPopular(limit) {
        return this.articlesService.findPopular(parseInt(limit || '5'));
    }
    async findByCategory(categorySlug, page, limit) {
        return this.articlesService.findByCategory(categorySlug, parseInt(page || '1'), parseInt(limit || '10'));
    }
    async findBySlug(slug) {
        return this.articlesService.findBySlug(slug);
    }
};
exports.ArticlesController = ArticlesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all articles' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('featured'),
    (0, swagger_1.ApiOperation)({ summary: 'Get featured articles' }),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "findFeatured", null);
__decorate([
    (0, common_1.Get)('popular'),
    (0, swagger_1.ApiOperation)({ summary: 'Get popular articles' }),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "findPopular", null);
__decorate([
    (0, common_1.Get)('category/:categorySlug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get articles by category' }),
    __param(0, (0, common_1.Param)('categorySlug')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "findByCategory", null);
__decorate([
    (0, common_1.Get)(':slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get article by slug' }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "findBySlug", null);
exports.ArticlesController = ArticlesController = __decorate([
    (0, swagger_1.ApiTags)('Articles'),
    (0, common_1.Controller)('v1/articles'),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService])
], ArticlesController);
//# sourceMappingURL=articles.controller.js.map