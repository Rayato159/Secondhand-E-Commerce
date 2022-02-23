import { Body, Controller, Get, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { User } from 'src/users/users.decorator';
import { Users } from 'src/users/users.entity';
import { Carts } from './carts.entity';
import { CartsService } from './carts.service';
import { CreateCartsDto } from './dto/create-carts.dto';

@Controller('carts')
export class CartsController {
    constructor(private cartsService: CartsService) {}

    @UseGuards(JwtAuthGuard)
    @Post('create')
    createCart(
        @Body() createCartsDto: CreateCartsDto,
        @User() user: Users,
    ): Promise<Carts> {
        return this.cartsService.createCart(user, createCartsDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get('get')
    getCartByUser(
        @User() user: Users,
    ): Promise<Carts> {
        return this.cartsService.getCartByUser(user)
    }
}