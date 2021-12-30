import { IsEnum, IsNotEmpty, IsNumber } from "class-validator";

import { ProductCategory } from "../enum/product-category.enum";

export class CreateProductDto {
    @IsNotEmpty()
    product_name: string

    @IsNotEmpty()
    lifespan: string
    
    @IsNotEmpty()
    price: number

    @IsNotEmpty()
    description: string

    @IsNotEmpty()
    address: string

    @IsNotEmpty()
    @IsEnum(ProductCategory)
    category: ProductCategory
}