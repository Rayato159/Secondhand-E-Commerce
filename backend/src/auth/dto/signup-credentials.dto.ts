import {  IsNotEmpty, IsString, Matches, MinLength, MaxLength, IsEmail, IsOptional, IsEnum } from "class-validator"
import { UserRoleEnum } from "../enum/user-role.enum"

export class SignUpCredentialsDto {
    @IsNotEmpty()
    first_name: string

    @IsNotEmpty()
    last_name: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, { 
        message: 'Password must be eight characters, at least one letter, one number and one special character.'
    })
    password: string

    @IsNotEmpty()
    passwordConfirm: string

    @IsNotEmpty()
    @Matches(/([0][0-9])\d{8}/, {
        message: 'Pattern: 0123456789'
    })
    phone: string

    @IsOptional()
    @IsEnum(UserRoleEnum)
    role?: UserRoleEnum
}