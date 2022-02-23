import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsService } from 'src/products/products.service';
import { Users } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
import { Carts } from './carts.entity';
import { CartsRepository } from './carts.repository';
import { CreateCartsDto } from './dto/create-carts.dto';

@Injectable()
export class CartsService {
    constructor(
        @InjectRepository(CartsRepository)
        private cartsRepository: CartsRepository,
        private usersService: UsersService,
        private productsService: ProductsService,
    ) {}

    async createCart(user: Users, createCartsDto: CreateCartsDto): Promise<Carts> {
        try {
            const userFound = await this.usersService.getUserById(user.user_id)

            const { product_id } = createCartsDto
            const productFound = await this.productsService.getProductById(product_id)

            const cart = this.cartsRepository.create({
                user: userFound,
                product: productFound,
            })
            return await this.cartsRepository.save(cart)
        } catch(e) {
            throw new BadRequestException({
                message: 'Error, Please try again.'
            })
        }
    }
    
    async getCartByUser(user: Users): Promise<Carts> {
        try {
            const userFound = await this.usersService.getUserById(user.user_id)
            return await this.cartsRepository.findOne({ where: { user: userFound } })
        } catch(e) {
            throw new NotFoundException({
                message: 'Error, Cart not found.'
            })
        }
    }

    async deleteCartByUser(user: Users): Promise<Carts> {
        try {
            const cart = await this.getCartByUser(user)
            await this.cartsRepository.delete(cart.cart_id)
            return cart
        } catch(e) {
            throw new NotFoundException({
                message: 'Error, Cart not found.'
            })
        }
    }
}
