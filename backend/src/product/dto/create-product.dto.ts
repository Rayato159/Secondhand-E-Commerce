import { IsNotEmpty, IsString} from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    product_name: string
    
    @IsNotEmpty()
    price: number

    @IsNotEmpty()
    @IsString()
    description: string

    @IsNotEmpty()
    @IsString()
    address: string
}