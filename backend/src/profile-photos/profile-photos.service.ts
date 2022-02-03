import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/users.entity';
import { ProfilePhotos } from './profile-photos.entity';
import { ProfilePhotosRepository } from './profile-photos.repository';
import * as fs from 'fs'

@Injectable()
export class ProfilePhotosService {
    constructor(
        @InjectRepository(ProfilePhotosRepository)
        private profilePhotoRepository: ProfilePhotosRepository,
    ) {}

    async uploadProfilePhoto(path: string, filename: string, user: Users): Promise<ProfilePhotos> {
        try {
            const profilePhoto = this.profilePhotoRepository.create({
                path,
                name: filename,
                user,
            })

            return await this.profilePhotoRepository.save(profilePhoto)
        } catch(e) {
            throw new BadRequestException({
                message: 'Please upload .jpg or .png file.'
            })
        }
    }

    async getProfilePhotoById(profile_photo_id: string): Promise<ProfilePhotos> {
        try {
            const profilePhoto = await this.profilePhotoRepository.findOne(profile_photo_id)
            return profilePhoto
        } catch(e) {
            throw new NotFoundException({
                message: 'Profile photo not found.'
            })
        }
    }

    async getProfilePhotoByUser(user: Users): Promise<ProfilePhotos> {
        try {
            const profilePhoto = await this.profilePhotoRepository.findOne({ where: { user } })
            return profilePhoto
        } catch(e) {
            throw new NotFoundException({
                message: 'Profile photo not found.'
            })
        }
    }

    async deleteProfilePhotoByUser(user: Users): Promise<ProfilePhotos> {
        try {
            const profilePhoto = await this.profilePhotoRepository.findOne({ where: { user } })
            fs.unlinkSync(profilePhoto.path)
            await this.profilePhotoRepository.delete({ user })
            return profilePhoto
        } catch(e) {
            throw new NotFoundException({
                message: 'Profile photo not found.'
            })
        }
    }
}
