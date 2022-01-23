import { Matches, IsOptional } from "class-validator"

export class UpdateAccountDto {

    @IsOptional()
    first_name?: string

    @IsOptional()
    last_name?: string

    @IsOptional()
    @Matches(/([0][0-9])\d{8}/, {
        message: 'Pattern: 0123456789'
    })
    phone?: string
}