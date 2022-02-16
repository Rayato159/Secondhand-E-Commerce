import { IsOptional } from "class-validator";

export class SearchProductsDto {

    @IsOptional()
    search?: string
}