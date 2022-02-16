import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesService } from 'src/categories/categories.service';
import { Users } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
import { CreateProductDto } from './dto/create-product.dto';
import { SearchProductsDto } from './dto/search-products.dto';
import { UpdateProductDto } from './dto/update-products.dto';
import { Status } from './enum/status.enum';
import { Products } from './products.entity';
import { ProductsRepository } from './products.repository';
import * as fs from 'fs';
import { ProductPhotosRepository } from 'src/product-photos/product-photos.repository';
import { ProductPhotosService } from 'src/product-photos/product-photos.service';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsRepository)
        private productsRepository: ProductsRepository,

        @InjectRepository(ProductPhotosRepository)
        private productPhotosRepository: ProductPhotosRepository,

        private productPhotosService: ProductPhotosService,
        private userService: UsersService,
        private categoriesService: CategoriesService,
    ) {}

    async createProduct(createProductDto: CreateProductDto, user: Users): Promise<Products> {
        try {
            const { category, ...details } = createProductDto

            const categoryFound = await this.categoriesService.findCategory(category)

            const product = this.productsRepository.create({
                ...details,
                category: categoryFound,
                user,
            })

            return await this.productsRepository.save(product)
        } catch(e) {
            throw new BadRequestException({
                message: 'Plase check your information about product.'
            })
        }
    }

    async getProducts(searchProductsDto: SearchProductsDto): Promise<any> {
        try {
            const { search } = searchProductsDto

            const query = this.productsRepository.createQueryBuilder('products')

            query.andWhere('(products.status = :status)', { status: `${Status.Avaliable}` })
            query.leftJoinAndSelect('products.category', 'categories')
            query.leftJoinAndSelect('products.user', 'users')
            query.leftJoinAndSelect('products.product_photos', 'product_photos')

            if(search) {
                query.andWhere('(LOWER(products.title) LIKE LOWER(:search) OR LOWER(categories.name) LIKE LOWER(:search))', { search: `%${search}%` })
            }

            const products = await query.getMany()
            if(products.length === 0) {
                throw new NotFoundException()
            }

            return products
        } catch(e) {
            throw new NotFoundException({
                message: 'Products are empty.'
            })
        }
    }

    async getProductById(product_id: string): Promise<Products> {
        try {
            const product = await this.productsRepository.findOne(product_id)
            return product
        } catch(e) {
            throw new NotFoundException({
                message: 'Product not found.'
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

    async updateProductStatusByUser(product_id: string, user: Users, status: Status): Promise<Products> {
        try {
            const product = await this.productsRepository.findOne({ where: { product_id: product_id, user } })
            product.status = status
            return await this.productsRepository.save(product)
        } catch(e) {
            throw new NotFoundException({
                message: 'Product not found.'
            })
        }
    }

    async updateProductStatus(product_id: string): Promise<Products> {
        try {
            const product = await this.productsRepository.findOne(product_id)
            product.status = Status.SoldOut
            return await this.productsRepository.save(product)
        } catch(e) {
            throw new NotFoundException({
                message: 'Product not found.'
            })
        }
    }

    async updateProduct(product_id: string, user: Users, updateProductDto: UpdateProductDto): Promise<Products> {
        try {
            const product = await this.productsRepository.findOne({ where: { product_id, user } })
            const { title, description, price, category } = updateProductDto

            if(title) {
                product.title = title
            }

            if(description) {
                product.description = description
            }

            if(price) {
                product.price = price
            }

            if(category) {
                const categoryFound = await this.categoriesService.findCategory(category)
                product.category = categoryFound
            }

            return await this.productsRepository.save(product)

        } catch(e) {
            throw new NotFoundException({
                message: 'Prodcut not found.'
            })
        }
    }

    async deleteProduct(product_id: string): Promise<Products> {
        try {
            const product = await this.productsRepository.findOne(product_id)
            const photos = await this.productPhotosRepository.find({ product })

            for(let i=0; i<photos.length; i++) {
                fs.unlinkSync(`..\\frontend${photos[i].path}`)
            }

            await this.productsRepository.delete(product_id)
            return product
        } catch(e) {
            throw new NotFoundException({
                message: 'Product not found.'
            })
        }
    }
}
