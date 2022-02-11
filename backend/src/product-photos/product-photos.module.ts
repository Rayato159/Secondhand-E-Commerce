import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { diskStorage } from 'multer';
import { ProductPhotosController } from './product-photos.controller';
import { ProductPhotosRepository } from './product-photos.repository';
import { ProductPhotosService } from './product-photos.service';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { ProductsModule } from 'src/products/products.module';
import { ProductsRepository } from 'src/products/products.repository';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forFeature([
      ProductPhotosRepository,
      ProductsRepository,
    ]),
    MulterModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          fileFilter: (req, file, cb) => {
            if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
              cb(null, true);
            } else {
              cb(null, false);
            }
          },
          limits: {
            fileSize: 10e+6,
            files: 5,
          },
          storage: diskStorage({
            destination: configService.get('PRODUCT_PHOTOS_PATH'),
            filename: (req, file, cb) => {
              const filename: string = `product_${uuidv4()}`
              const extension: string = path.parse(file.originalname).ext

              cb(null, `${filename}${extension}`)
            }
          })
        }
      }
    })
  ],
  controllers: [ProductPhotosController],
  providers: [ProductPhotosService]
})
export class ProductPhotosModule {}