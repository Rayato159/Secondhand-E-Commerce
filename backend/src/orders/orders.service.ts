import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsService } from 'src/products/products.service';
import { Users } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
import { Orders } from './orders.entity';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(OrdersRepository)
        private ordersRepository: OrdersRepository,

        private productsService: ProductsService,
        private usersService: UsersService,
    ) {}

    async createOrder(product_id: string, user: Users): Promise<Orders> {
        try {
            const productFound = await this.productsService.getProductById(product_id)
            const order = this.ordersRepository.create({
                product: productFound,
                user,
            })

            return await this.ordersRepository.save(order)
        } catch(e) {
            throw new BadRequestException({
                message: 'Please check your information.'
            })
        }
    }

    async getOrders(user: Users): Promise<Orders[]> {
        try {
            const orders = await this.ordersRepository.find({ where: { user } })
            return orders
        } catch(e) {
            throw new NotFoundException({
                message: 'Orders are empty.'
            })
        }
    }

    async getOrderById(order_id: string, user: Users): Promise<Orders> {
        try {
            const order = this.ordersRepository.findOne({ where: { order_id, user } })
            return order
        } catch(e) {
            throw new NotFoundException({
                message: 'Order not found.'
            })
        }
    }

    async deleteOrder(order_id: string, user: Users): Promise<Orders> {
        try {
            const order = await this.ordersRepository.findOne({ where: { order_id: order_id, user } })
            await this.ordersRepository.delete(order_id)
            return order
        } catch(e) {
            throw new NotFoundException({
                message: 'Order not found.'
            })
        }
    }
}
