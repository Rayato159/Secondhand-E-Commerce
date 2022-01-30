import { IsNotEmpty } from "class-validator";

export class CreateProductDto {

    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    description: string

    @IsNotEmpty()
    price: number
}