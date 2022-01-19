import { IsOptional, IsString } from 'class-validator'

export class GetProductsDto {
    @IsOptional()
    @IsString()
    search?: string
}