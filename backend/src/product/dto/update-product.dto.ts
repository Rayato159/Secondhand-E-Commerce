import { IsEnum, IsOptional, IsString } from "class-validator"
import { ProductStatus } from "../enum/product-status.enum"

export class UpdateProductDto {

    @IsOptional()
    @IsString()
    product_name?: string

    @IsOptional()
    price?: number

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsString()
    address?: string

    @IsOptional()
    @IsEnum(ProductStatus)
    status?: ProductStatus
}