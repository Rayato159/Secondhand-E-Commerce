import { Module } from '@nestjs/common';
import { ProductPhotosController } from './product-photos.controller';
import { ProductPhotosService } from './product-photos.service';

@Module({
  controllers: [ProductPhotosController],
  providers: [ProductPhotosService]
})
export class ProductPhotosModule {}
