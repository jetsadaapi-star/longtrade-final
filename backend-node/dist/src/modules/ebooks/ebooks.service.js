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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EbooksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EbooksService = class EbooksService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [ebooks, total] = await Promise.all([
            this.prisma.ebooks.findMany({
                where: { is_published: true, deleted_at: null },
                skip,
                take: limit,
                orderBy: { created_at: 'desc' },
                include: { categories: true },
            }),
            this.prisma.ebooks.count({ where: { is_published: true, deleted_at: null } }),
        ]);
        return {
            success: true,
            data: this.serializeBigInt(ebooks),
            meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
        };
    }
    async findFeatured(limit = 3) {
        const ebooks = await this.prisma.ebooks.findMany({
            where: { is_published: true, is_featured: true, deleted_at: null },
            take: limit,
            orderBy: { created_at: 'desc' },
            include: { categories: true },
        });
        return { success: true, data: this.serializeBigInt(ebooks) };
    }
    async findBySlug(slug) {
        const ebook = await this.prisma.ebooks.findFirst({
            where: { slug, is_published: true, deleted_at: null },
            include: { categories: true },
        });
        if (!ebook) {
            return { success: false, message: 'Ebook not found' };
        }
        await this.prisma.ebooks.update({
            where: { id: ebook.id },
            data: { views_count: { increment: 1 } },
        });
        return { success: true, data: this.serializeBigInt(ebook) };
    }
    serializeBigInt(data) {
        return JSON.parse(JSON.stringify(data, (_, v) => typeof v === 'bigint' ? v.toString() : v));
    }
};
exports.EbooksService = EbooksService;
exports.EbooksService = EbooksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EbooksService);
//# sourceMappingURL=ebooks.service.js.map