import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsRepository } from 'src/products/products.repository';
import { Users } from 'src/users/users.entity';
import { ProductPhotos } from './product-photos.entity';
import { ProductPhotosRepository } from './product-photos.repository';
import * as fs from 'fs'

@Injectable()
export class ProductPhotosService {
    constructor(
        @InjectRepository(ProductPhotosRepository)
        private productPhotosRepository: ProductPhotosRepository,
        
        @InjectRepository(ProductsRepository)
        private productsRepostiory :ProductsRepository
    ) {}

    async uploadProductPhotos(files: Array<Express.Multer.File>, product_id: string, user: Users): Promise<ProductPhotos[]> {
        try {
            const product = await this.productsRepostiory.findOne({ where: { product_id: product_id, user } })
 
            let productPhotos: ProductPhotos[] = []
            for(let i=0; i<files.length; i++) {
                let { filename, path } = files[i]

                let newPath = path.match(/(?<=frontend).*$/)[0]

                let photo = this.productPhotosRepository.create({
                    name: filename,
                    path: newPath,
                    product,
                })

                productPhotos.push(photo)
            }

            return await this.productPhotosRepository.save(productPhotos)
        } catch(e) {
            throw new BadRequestException({
                message: 'Files must be image type.'
            })
        }
    }

    async getProductPhotos(product_id: string): Promise<ProductPhotos[]> {
        try {
            const product = await this.productsRepostiory.findOne(product_id)
            const productPhotos = await this.productPhotosRepository.find({ where: { product } })
            return productPhotos
        } catch(e) {
            throw new NotFoundException({
                message: 'Product photos are empty.'
            })
        }
    }

    async getProductPhotoById(product_photo_id: string): Promise<ProductPhotos> {
        try {
            const photo = await this.productPhotosRepository.findOne(product_photo_id)
            return photo
        } catch(e) {
            throw new NotFoundException({
                message: 'Product photo not found.'
            })
        }
    }

    async deleteProductPhoto(product_photo_id: string, user: Users): Promise<ProductPhotos> {
        try {
            const photo = await this.getProductPhotoById(product_photo_id)
            const product = await this.productsRepostiory.findOne({ where: { product_id: photo.product.product_id, user } })

            if(!product) {
                throw new NotFoundException()
            }

            fs.unlinkSync(`..\\frontend\\${photo.path}`)
            await this.productPhotosRepository.delete({ product_photo_id })
            return photo
        } catch(e) {
            throw new NotFoundException({
                message: 'Product photo not found.'
            })
        }
    }
}
