import {  IsNotEmpty, IsString, Matches, MinLength, MaxLength, IsEmail, IsOptional, IsEnum } from "class-validator"
import { UserRoleEnum } from "../enum/user-role.enum"

export class SignUpCredentialsDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(50)
    first_name: string

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(50)
    last_name: string

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(500)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { 
        message: 'Password is too weak.'
    })
    password: string

    @IsNotEmpty()
    @IsString()
    @Matches(/([0][0-9])\d{8}/, {
        message: 'Pattern: 0123456789'
    })
    phone: string

    @IsNotEmpty()
    birthday: Date

    @IsOptional()
    @IsEnum(UserRoleEnum)
    role?: UserRoleEnum
}