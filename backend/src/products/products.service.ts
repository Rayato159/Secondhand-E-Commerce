import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Products } from './products.entity';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsRepository)
        private productsRepository: ProductsRepository,
        private userService: UsersService,
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
                message: 'Plase check your information about product.'
            })
        }
    }

    async getProducts(): Promise<Products[]> {
        try {
            const products = await this.productsRepository.find()
            return products
        } catch(e) {
            throw new NotFoundException({
                message: 'Products are empty.'
            })
        }
    }

    async getProductByUser(user_id: string): Promise<Products[]> {
        try {
            const user = await this.userService.getUserById(user_id)
            const products = await this.productsRepository.find({ where: { user } })
            return products
        } catch(e) {
            throw new NotFoundException({
                message: 'Product not found.'
            })
        }
    }
}
