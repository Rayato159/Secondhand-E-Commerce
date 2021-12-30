import { IsEnum, IsOptional, IsString } from 'class-validator'

import { ProductCategory } from '../enum/product-category.enum'

export class GetProductsDto {
    @IsOptional()
    @IsString()
    search?: string

    @IsOptional()
    @IsEnum(ProductCategory)
    category?: ProductCategory
}