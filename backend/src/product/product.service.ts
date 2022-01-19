import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';

import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsDto } from './dto/get-products.dto';
import { Product } from './product.entity';
import { UpdateProductDto } from './dto/update-product.dto';
import { User } from 'src/auth/user.entity';
import { DeleteResult } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductRepository)
        private productRepository: ProductRepository
    ) {}

    async getProducts(getProductsDto: GetProductsDto, user: User): Promise<Product[]> {
        return this.productRepository.getProducts(getProductsDto, user)
    }

    async getProductsForAll(getProductsDto: GetProductsDto): Promise<Product[]> {
        return this.productRepository.getProductsForAll(getProductsDto)
    }

    async getProductByID(id: string, user: User): Promise<Product> {
        try{
            const product = await this.productRepository.findOne({ where: { id, user } })
            return product
        } catch(error) {
            throw new NotFoundException()
        }
    }

    async createProduct(createProductDto: CreateProductDto, user: User): Promise<Product> {
        return this.productRepository.createProduct(createProductDto, user)
    }

    async updateProduct(id: string, updateProductDto: UpdateProductDto, user: User): Promise<Product> {
        const {
            product_name,
            price,
            description,
            address,
            status,
        } = updateProductDto
        
        const product = await this.getProductByID(id, user)

        if(product_name) {
            product.product_name = product_name
        }

        if(price) {
            product.price = price
        }

        if(description) {
            product.description = description
        }

        if(address) {
            product.address = address
        }

        if(status) {
            product.status = status
        }
        
        try{
            await this.productRepository.save(product)
            return product
        } catch(error) {
            throw new NotAcceptableException()
        }
    }

    async deleteProduct(id: string, user: User): Promise<DeleteResult> {
        try {
           const result = await this.productRepository.delete({ id, user })
           return result
        } catch(error) {
            throw new NotFoundException()
        }
    }
}
