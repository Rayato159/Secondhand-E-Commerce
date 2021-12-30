import { EntityRepository, Repository } from "typeorm";

import { Product } from "./product.entity";
import { CreateProductDto } from "./dto/create-product.dto";
import { ProductStatus } from "./enum/product-status.enum";
import { GetProductsDto } from "./dto/get-products.dto";
import { ConflictException, NotFoundException } from "@nestjs/common";
import { User } from "src/auth/user.entity";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    async createProduct(createProductDto: CreateProductDto, user: User): Promise<Product> {
        const {
            product_name,
            lifespan,
            price,
            description,
            address,
            category,
        } = createProductDto

        const product = this.create({
            product_name,
            lifespan,
            price,
            description,
            address,
            status: ProductStatus.AVAILABLE,
            category,
            user,
        })

        try {
            await this.save(product)
            return product
        } catch(error) {
            throw new ConflictException()
        }
    }

    async getProducts(getProductsDto: GetProductsDto, user: User): Promise<Product[]> {
        const { search, category } = getProductsDto
        const query = this.createQueryBuilder('products')

        query.where({ user })

        if(search) {
            query.andWhere(
                '(LOWER(products.product_name) LIKE LOWER(:search))',
                { search: `%${search}%` }
            )
        }

        if(category) {
            query.andWhere(
                'products.category = :category', 
                { category }
            )
        }

        try{
            const products = await query.getMany()
            return products
        } catch(error) {
            throw new NotFoundException()
        }
    }

    async getProductsForAll(getProductsDto: GetProductsDto): Promise<Product[]> {
        const { search, category } = getProductsDto
        const query = this.createQueryBuilder('products')

        if(search) {
            query.andWhere(
                '(LOWER(products.product_name) LIKE LOWER(:search))',
                { search: `%${search}%` }
            )
        }

        if(category) {
            query.andWhere(
                'products.category = :category', 
                { category }
            )
        }

        try{
            const products = await query.getMany()
            return products
        } catch(error) {
            throw new NotFoundException()
        }
    }
}