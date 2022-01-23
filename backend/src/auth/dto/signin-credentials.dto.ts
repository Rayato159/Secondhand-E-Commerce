import { IsNotEmpty } from "class-validator"

export class SignInCredentialsDto {
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    password: string
}