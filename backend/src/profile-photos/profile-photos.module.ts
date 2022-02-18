import { Module } from '@nestjs/common';
import { ProfilePhotosService } from './profile-photos.service';
import { ProfilePhotosController } from './profile-photos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfilePhotosRepository } from './profile-photos.repository';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { diskStorage } from 'multer';
import * as path from 'path'
import { v4 as uuidv4 } from 'uuid';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([ProfilePhotosRepository]),
    MulterModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          fileFilter: (req, file, cb) => {
            if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
              cb(null, true);
            } else {
              cb(null, false);
            }
          },
          limits: {
            files: 1,
          },
          storage: diskStorage({
            destination: configService.get('PROFILE_PHOTOS_PATH'),
            filename: (req, file, cb) => {
              const filename: string = `profile_${uuidv4()}`
              const extension: string = path.parse(file.originalname).ext

              cb(null, `${filename}${extension}`)
            }
          })
        }
      }
    })
  ],
  providers: [ProfilePhotosService],
  controllers: [ProfilePhotosController]
})
export class ProfilePhotosModule {}
