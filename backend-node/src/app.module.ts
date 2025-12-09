import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './modules/prisma';
import { AuthModule } from './modules/auth/auth.module';
import { CoursesModule } from './modules/courses/courses.module';
import { ArticlesModule } from './modules/articles/articles.module';
import { ProductsModule } from './modules/products/products.module';
import { EbooksModule } from './modules/ebooks/ebooks.module';
import { AdminModule } from './modules/admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    CoursesModule,
    ArticlesModule,
    ProductsModule,
    EbooksModule,
    AdminModule,
  ],
})
export class AppModule { }

