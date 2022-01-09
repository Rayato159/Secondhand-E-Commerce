import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class SignInCredentialsDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string
}