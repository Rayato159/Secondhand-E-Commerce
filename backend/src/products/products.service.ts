import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/users.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { Products } from './products.entity';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsRepository)
        private productsRepository: ProductsRepository
    ) {}

    async createProduct(createProductDto: CreateProductDto, user: Users): Promise<Products> {
        try {
            const { ...details } = createProductDto

            const product = this.productsRepository.create({
                ...details,
                user,
            })

            return await this.productsRepository.save(product)
        } catch(e) {
            throw new BadRequestException({
                message: ['Plase check your information about product.']
            })
        }
    }
}
