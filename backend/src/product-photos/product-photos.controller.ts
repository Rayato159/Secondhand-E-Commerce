import { Controller, Post, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { ProductPhotosService } from './product-photos.service';

@Controller('product-photos')
export class ProductPhotosController {
    constructor(private  productPhotosService: ProductPhotosService) {}

    @UseGuards(JwtAuthGuard)
    @Post('uploads')
    @UseInterceptors(FilesInterceptor('images'))
    uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
        console.log(files)
    }
}
