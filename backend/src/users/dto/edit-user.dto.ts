import { IsNotEmpty, IsOptional, Matches } from "class-validator";

export class EditUserDto {

    @IsOptional()
    address?: string

    @IsOptional()
    @Matches(/^[0-9]{0,10}$/, {
        message: 'The phone number is not correct as a pattern.'
    })
    phone_number?: string

    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    password_confirm: string
}