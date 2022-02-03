import { Controller, Param, Post, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { User } from 'src/users/users.decorator';
import { Users } from 'src/users/users.entity';
import { ProductPhotos } from './product-photos.entity';
import { ProductPhotosService } from './product-photos.service';

@Controller('product-photos')
export class ProductPhotosController {
    constructor(private  productPhotosService: ProductPhotosService) {}

    @UseGuards(JwtAuthGuard)
    @Post('uploads/:product_id')
    @UseInterceptors(FilesInterceptor('images'))
    uploadFile(
        @UploadedFiles() files: Array<Express.Multer.File>,
        @Param('product_id') product_id: string,
        @User() user: Users,
    ): Promise<ProductPhotos[]> {
        return this.productPhotosService.uploadProductPhotos(files, product_id, user)
    }
}
