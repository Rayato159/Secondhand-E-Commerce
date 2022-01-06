import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Param, 
    Patch, 
    Post, 
    Query, 
    UploadedFiles, 
    UseGuards, 
    UseInterceptors,
    Res,
} from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { GetUser } from 'src/auth/jwt/get-user.decorator';
import { User } from 'src/auth/user.entity';

import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsDto } from './dto/get-products.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(
        private productService: ProductService
    ) {}

    @Get('/all')
    getProductsForAll(
        @Query() getProductsDto: GetProductsDto,
    ): Promise<Product[]> {
        return this.productService.getProductsForAll(getProductsDto)
    }

    @Get('/:imgpath')
    seeUploadedFile(
        @Param('imgpath') image,
        @Res() res,
    ) {
        return res.sendFile(image, { root: 'uploads/categories' })
    }

    @Get()
    @UseGuards(AuthGuard())
    getProducts(
        @Query() getProductsDto: GetProductsDto,
        @GetUser() user: User,
    ): Promise<Product[]> {
        return this.productService.getProducts(getProductsDto, user)
    }

    @Get('/:id')
    @UseGuards(AuthGuard())
    getProductByID(
        @Param('id') id: string,
        @GetUser() user: User,
    ): Promise<Product> {
        return this.productService.getProductByID(id, user)
    }


    @Post()
    @UseGuards(AuthGuard())
    createProduct(
        @Body() createProductDto: CreateProductDto,
        @GetUser() user: User
    ): Promise<Product> {
        return this.productService.createProduct(createProductDto, user)
    }

    @Post('/upload')
    @UseGuards(AuthGuard())
    @UseInterceptors(FileInterceptor('image'))
    uploadProductImage(
        @UploadedFiles() file,
    ) {
        console.log(file)
    }

    @Delete('/:id')
    @UseGuards(AuthGuard())
    deleteProduct(
        @Param('id') id: string,
        @GetUser() user: User,
    ): Promise<void> {
        return this.productService.deleteProduct(id, user)
    }
    
    @Patch('/:id/update')
    @UseGuards(AuthGuard())
    updateProduct(
        @Param('id') id: string,
        @Body() updateProductDto: UpdateProductDto,
        @GetUser() user: User,
    ): Promise<Product> {
        return this.productService.updateProduct(id, updateProductDto, user)
    }
}