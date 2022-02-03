import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsRepository } from './products.repository';
import { UsersModule } from 'src/users/users.module';
import { CategoriesModule } from 'src/categories/categories.module';
import { ProductPhotos } from 'src/product-photos/product-photos.entity';

@Module({
  imports: [
    ProductPhotos,
    TypeOrmModule.forFeature([
      ProductsRepository,
    ]),
    UsersModule,
    CategoriesModule,
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
  exports: [ProductsService],
})
export class ProductsModule {}
