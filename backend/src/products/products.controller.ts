import { Body, Controller, Post, UseGuards, Request, Get, Param } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { CreateProductDto } from './dto/create-product.dto';
import { Products } from './products.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @UseGuards(JwtAuthGuard)
    @Post('create')
    createProduct(
        @Body() createProductDto: CreateProductDto,
        @Request() { user }: any
    ): Promise<Products> {
        return this.productsService.createProduct(createProductDto, user)
    }

    @Get()
    getProducts(): Promise<Products[]> {
        return this.productsService.getProducts()
    }

    @Get(':user_id')
    getProductByUser(
        @Param('user_id') user_id: string
    ): Promise<Products[]> {
        return this.productsService.getProductByUser(user_id)
    }
}
