import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsRepository } from './products.repository';
import { UsersModule } from 'src/users/users.module';
import { CategoriesModule } from 'src/categories/categories.module';
import { ProductPhotosRepository } from 'src/product-photos/product-photos.repository';
import { PassportModule } from '@nestjs/passport';
import { RolesGuard } from 'src/users/roles.guard';

@Module({
  imports: [
    PassportModule,
    TypeOrmModule.forFeature([
      ProductsRepository,
      ProductPhotosRepository,
    ]),
    UsersModule,
    CategoriesModule,
  ],
  providers: [ProductsService ,RolesGuard],
  controllers: [ProductsController],
  exports: [ProductsService],
})
export class ProductsModule {}
