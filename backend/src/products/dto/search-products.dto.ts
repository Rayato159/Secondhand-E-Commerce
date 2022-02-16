import { IsOptional } from "class-validator";

export class SearchProductsDto {

    @IsOptional()
    search?: string

    @IsOptional()
    user_id?: string
}