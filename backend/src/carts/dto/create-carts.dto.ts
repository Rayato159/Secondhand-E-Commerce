import { IsNotEmpty } from 'class-validator'

export class CreateCartsDto {

    @IsNotEmpty()
    product_id: string
}