import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsRepository } from 'src/products/products.repository';
import { Users } from 'src/users/users.entity';
import { ProductPhotos } from './product-photos.entity';
import { ProductPhotosRepository } from './product-photos.repository';

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

                let photo = this.productPhotosRepository.create({
                    name: filename,
                    path,
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
}
