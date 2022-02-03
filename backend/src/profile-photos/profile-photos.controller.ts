import { Controller, Delete, Get, Param, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { User } from 'src/users/users.decorator';
import { Users } from 'src/users/users.entity';
import { ProfilePhotoInterceptor } from './interceptors/profile-photo.interceptor';
import { ProfilePhotos } from './profile-photos.entity';
import { ProfilePhotosService } from './profile-photos.service';

@Controller('profile-photos')
export class ProfilePhotosController {
    constructor(private profilePhotosService: ProfilePhotosService) {}

    @UseGuards(JwtAuthGuard)
    @Post('upload')
    @UseInterceptors(FileInterceptor('image'))
    uploadProfilePhoto(
        @UploadedFile() image: Express.Multer.File,
        @User() user: Users,
    ): Promise<ProfilePhotos>  {
        const {
            path,
            filename,
        } = image
        return this.profilePhotosService.uploadProfilePhoto(path, filename, user)
    }

    @UseInterceptors(ProfilePhotoInterceptor)
    @Get(':profile_photo_id')
    getProfilePhotoById(
        @Param(':profile_photo_id') profile_photo_id: string
    ): Promise<ProfilePhotos>  {
        return this.profilePhotosService.getProfilePhotoById(profile_photo_id)
    }

    @UseGuards(JwtAuthGuard)
    @UseInterceptors(ProfilePhotoInterceptor)
    @Get('user-profile')
    getProfilePhotoByUser(
        @User() user: Users
    ): Promise<ProfilePhotos>  {
        return this.profilePhotosService.getProfilePhotoByUser(user)
    }

    @UseGuards(JwtAuthGuard)
    @UseInterceptors(ProfilePhotoInterceptor)
    @Delete('delete')
    deleteProfilePhotoByUser(
        @User() user: Users
    ): Promise<ProfilePhotos>  {
        return this.profilePhotosService.deleteProfilePhotoByUser(user)
    }

}
