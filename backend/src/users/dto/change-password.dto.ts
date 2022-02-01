import { IsNotEmpty, Matches } from "class-validator";

export class ChangePasswordDto {

    @IsNotEmpty()
    old_password: string

    @IsNotEmpty()
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
        message: 'Password must be minimum eight characters, at least one letter, one number and one special character.'
    })
    new_password: string

    @IsNotEmpty()
    new_password_confirm: string
}