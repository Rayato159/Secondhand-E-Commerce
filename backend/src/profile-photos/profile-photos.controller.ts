import { Controller, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { ProfilePhotos } from './profile-photos.entity';
import { ProfilePhotosService } from './profile-photos.service';

@Controller('profile-photos')
export class ProfilePhotosController {
    constructor(private profilePhotosService: ProfilePhotosService) {}

    @UseGuards(JwtAuthGuard)
    @Post('upload')
    @UseInterceptors(FileInterceptor('image'))
    uploadProfilePhoto(@UploadedFile() image: Express.Multer.File): Promise<ProfilePhotos>  {
        const {
            path,
            filename,
        } = image
        console.log(image)
        return this.profilePhotosService.uploadProfilePhoto(path, filename)
    }
}
