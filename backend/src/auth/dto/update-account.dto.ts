import {  IsString, Matches, MinLength, MaxLength, IsOptional } from "class-validator"

export class UpdateAccountDto {

    @IsOptional()
    @IsString()
    @MinLength(1)
    @MaxLength(50)
    first_name?: string

    @IsOptional()
    @IsString()
    @MinLength(1)
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
    picture?: string
}