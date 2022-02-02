import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfilePhotos } from './profile-photos.entity';
import { ProfilePhotosRepository } from './profile-photos.repository';

@Injectable()
export class ProfilePhotosService {
    constructor(
        @InjectRepository(ProfilePhotosRepository)
        private profilePhotoRepository: ProfilePhotosRepository
    ) {}

    async uploadProfilePhoto(path: string, filename: string): Promise<ProfilePhotos> {
        try {
            const profilePhoto = this.profilePhotoRepository.create({
                path,
                name: filename
            })

            return await this.profilePhotoRepository.save(profilePhoto)
        } catch(e) {
            throw new BadRequestException({
                message: 'Please upload .jpg or .png file.'
            })
        }
    }
}
