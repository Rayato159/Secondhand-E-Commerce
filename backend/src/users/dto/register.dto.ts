import { IsEmail, IsEnum, IsNotEmpty, IsOptional, Matches } from "class-validator";
import { Role } from "../enum/role.enum";

export class RegisterDto {

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
        message: 'Password must be minimum eight characters, at least one letter, one number and one special character.'
    })
    password: string

    @IsNotEmpty()
    password_confirm: string

    @IsNotEmpty()
    first_name: string

    @IsNotEmpty()
    last_name: string

    @IsNotEmpty()
    address: string

    @IsNotEmpty()
    @Matches(/^[0-9]{0,10}$/, {
        message: 'The phone number is not correct as a pattern.'
    })
    phone_number: string

    @IsOptional()
    @IsEnum(Role)
    role?: Role
}