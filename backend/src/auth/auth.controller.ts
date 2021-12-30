import { Body, Controller, Param, Patch, Post, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { SignUpCredentialsDto } from './dto/signup-credentials.dto';
import { SignInCredentialsDto } from './dto/signin-credentials.dto';
import { User } from './user.entity';
import { UpdateAccountDto } from './dto/update-account.dto';
import { GetUser } from './jwt/get-user.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/signup')
    async signUp(
        @Body() signUpCredentialsDto: SignUpCredentialsDto
    ): Promise<void> {
        return  this.authService.signUp(signUpCredentialsDto)
    }

    @Post('/signin')
    async signIn(
        @Body() signInCredentialsDto: SignInCredentialsDto
    ): Promise<{ accessToken: string }> {
        return this.authService.signIn(signInCredentialsDto)
    }

    @Patch('/update')
    @UseGuards(AuthGuard())
    async updateAccount(
        @Body() updateAccountDto: UpdateAccountDto,
        @GetUser() user: User,
    ): Promise<string> {
        return this.authService.updateAccount(updateAccountDto, user)
    }
}
