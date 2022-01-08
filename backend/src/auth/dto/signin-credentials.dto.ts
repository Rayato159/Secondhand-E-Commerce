import { Optional } from "@nestjs/common"
import { IsEmail, IsNotEmpty, IsString, IsEnum } from "class-validator"
import { UserRoleEnum } from "../enum/user-role.enum"

export class SignInCredentialsDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string
}