import { Body, Controller, Post, UseGuards, Get, Param, Delete, Query, Patch, UseInterceptors } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { Role } from 'src/users/enum/role.enum';
import { Roles } from 'src/users/roles.decorator';
import { RolesGuard } from 'src/users/roles.guard';
import { User } from 'src/users/users.decorator';
import { Users } from 'src/users/users.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { SearchProductsDto } from './dto/search-products.dto';
import { UpdateProductDto } from './dto/update-products.dto';
import { ProductInterceptor } from './interceptors/product.interceptor';
import { ProductsInterceptor } from './interceptors/products.interceptor';
import { Products } from './products.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @UseGuards(JwtAuthGuard)
    @Post('create')
    createProduct(
        @Body() createProductDto: CreateProductDto,
        @User() user: Users
    ): Promise<Products> {
        return this.productsService.createProduct(createProductDto, user)
    }

    @UseInterceptors(ProductsInterceptor)
    @Get()
    getProducts(
        @Query() searchProductsDto: SearchProductsDto,
    ): Promise<any> {
        return this.productsService.getProducts(searchProductsDto)
    }

    @Get('user_products/:user_id')
    getProductByUser(
        @Param('user_id') user_id: string
    ): Promise<Products[]> {
        return this.productsService.getProductByUser(user_id)
    }

    @UseInterceptors(ProductInterceptor)
    @Get(':product_id')
    getProductById(
        @Param('product_id') product_id: string
    ): Promise<any> {
        return this.productsService.getProductById(product_id)
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':product_id/status')
    updateProductStatus(
        @Param('product_id') product_id: string,
        @User() user: Users,
        @Body() { status }: any
    ): Promise<Products> {
        return this.productsService.updateProductStatusByUser(product_id, user, status)
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':product_id/update')
    updateProduct(
        @Param('product_id') product_id: string,
        @User() user: Users,
        @Body() updateProductDto: UpdateProductDto
    ): Promise<Products> {
        return this.productsService.updateProduct(product_id, user, updateProductDto)
    }
    
    @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':product_id/delete')
    deleteProduct(
        @Param('product_id') product_id: string,
    ): Promise<Products> {
        return this.productsService.deleteProduct(product_id)
    }
}
