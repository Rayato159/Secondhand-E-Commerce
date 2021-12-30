import { IsNotEmpty, IsString, IsEmail } from "class-validator"

export class SignInCredentialsDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string
}