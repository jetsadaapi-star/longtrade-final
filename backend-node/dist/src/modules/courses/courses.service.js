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
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CoursesService = class CoursesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(page = 1, limit = 10, category) {
        const skip = (page - 1) * limit;
        const where = {
            is_published: true,
            deleted_at: null,
        };
        if (category) {
            where.categories = { slug: category };
        }
        const [courses, total] = await Promise.all([
            this.prisma.courses.findMany({
                where,
                skip,
                take: limit,
                orderBy: { order: 'asc' },
                include: {
                    categories: true,
                },
            }),
            this.prisma.courses.count({ where }),
        ]);
        return {
            success: true,
            data: this.serializeBigInt(courses),
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findFeatured(limit = 6) {
        const courses = await this.prisma.courses.findMany({
            where: {
                is_published: true,
                is_featured: true,
                deleted_at: null,
            },
            take: limit,
            orderBy: { order: 'asc' },
            include: {
                categories: true,
            },
        });
        return {
            success: true,
            data: this.serializeBigInt(courses),
        };
    }
    async findBySlug(slug) {
        const course = await this.prisma.courses.findFirst({
            where: {
                slug,
                is_published: true,
                deleted_at: null,
            },
            include: {
                categories: true,
            },
        });
        if (!course) {
            return { success: false, message: 'Course not found' };
        }
        return {
            success: true,
            data: this.serializeBigInt(course),
        };
    }
    serializeBigInt(data) {
        return JSON.parse(JSON.stringify(data, (_, v) => typeof v === 'bigint' ? v.toString() : v));
    }
};
exports.CoursesService = CoursesService;
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CoursesService);
//# sourceMappingURL=courses.service.js.map