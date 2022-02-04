import { Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { User } from 'src/users/users.decorator';
import { Users } from 'src/users/users.entity';
import { Orders } from './orders.entity';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService) {}

    @UseGuards(JwtAuthGuard)
    @Post(':product_id/create')
    createOrder(
        @Param('product_id') product_id: string,
        @User() user: Users,
    ): Promise<Orders> {
        return this.ordersService.createOrder(product_id, user)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getOrders(
        @User() user: Users,
    ): Promise<Orders[]> {
        return this.ordersService.getOrders(user)
    }

    @UseGuards(JwtAuthGuard)
    @Get(':order_id')
    getOrderById(
        @Param('order_id') order_id: string,
        @User() user: Users,
    ): Promise<Orders> {
        return this.ordersService.getOrderById(order_id, user)
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':order_id/delete')
    deleteOrder(
        @Param('order_id') order_id: string,
        @User() user: Users,
    ): Promise<Orders> {
        return this.ordersService.deleteOrder(order_id, user)
    }
}
