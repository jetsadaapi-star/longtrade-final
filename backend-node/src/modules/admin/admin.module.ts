import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AdminGuard } from '../auth/guards/admin.guard';

@Module({
    imports: [
        PrismaModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'your-secret-key',
            signOptions: { expiresIn: '7d' },
        }),
    ],
    controllers: [AdminController],
    providers: [AdminService, AdminGuard],
    exports: [AdminService],
})
export class AdminModule { }
