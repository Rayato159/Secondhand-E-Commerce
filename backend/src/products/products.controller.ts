import { Body, Controller, Post, UseGuards, Request, UseInterceptors } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guards';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductTransformInterceptor } from './interceptors/product.interceptor';
import { Products } from './products.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @UseGuards(JwtAuthGuard)
    @UseInterceptors(ProductTransformInterceptor)
    @Post('create')
    createProduct(
        @Body() createProductDto: CreateProductDto,
        @Request() { user }: any
    ): Promise<Products> {
        return this.productsService.createProduct(createProductDto, user)
    }
}
