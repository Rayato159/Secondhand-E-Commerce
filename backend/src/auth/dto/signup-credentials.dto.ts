import {  IsNotEmpty, IsString, Matches, MinLength, MaxLength } from "class-validator"

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
    @Matches(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/, {
        message: 'Please check your email pattern',
    })
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
}