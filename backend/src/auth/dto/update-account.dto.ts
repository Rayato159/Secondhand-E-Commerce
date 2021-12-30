import {  IsString, Matches, MinLength, MaxLength, IsOptional } from "class-validator"

export class UpdateAccountDto {

    @IsOptional()
    @IsString()
    @MinLength(4)
    @MaxLength(50)
    first_name?: string

    @IsOptional()
    @IsString()
    @MinLength(4)
    @MaxLength(50)
    last_name?: string

    @IsOptional()
    @IsString()
    @Matches(/([0][0-9])\d{8}/, {
        message: 'Pattern: 0123456789'
    })
    phone?: string

    @IsOptional()
    @IsString()
    @MinLength(8)
    @MaxLength(500)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { 
        message: 'Password is too weak.'
    })
    password?: string

    @IsOptional()
    @IsString()
    picture?: string
}