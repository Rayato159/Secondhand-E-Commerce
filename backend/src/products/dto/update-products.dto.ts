import { IsOptional } from "class-validator";

export class UpdateProductDto {

    @IsOptional()
    title?: string

    @IsOptional()
    description?: string

    @IsOptional()
    price?: number

    @IsOptional()
    category?: string
}