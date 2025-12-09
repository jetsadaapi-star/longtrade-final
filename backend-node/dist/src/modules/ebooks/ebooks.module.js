"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EbooksModule = void 0;
const common_1 = require("@nestjs/common");
const ebooks_controller_1 = require("./ebooks.controller");
const ebooks_service_1 = require("./ebooks.service");
let EbooksModule = class EbooksModule {
};
exports.EbooksModule = EbooksModule;
exports.EbooksModule = EbooksModule = __decorate([
    (0, common_1.Module)({
        controllers: [ebooks_controller_1.EbooksController],
        providers: [ebooks_service_1.EbooksService],
        exports: [ebooks_service_1.EbooksService],
    })
], EbooksModule);
//# sourceMappingURL=ebooks.module.js.map