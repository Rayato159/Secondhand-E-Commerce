import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { SignUpCredentialsDto } from './dto/signup-credentials.dto';
import { SignInCredentialsDto } from './dto/signin-credentials.dto';
import { User } from './user.entity';
import { UpdateAccountDto } from './dto/update-account.dto';
import { GetUser } from './jwt/get-user.decorator';
import { DeleteResult } from 'typeorm';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    signUp(
        @Body() signUpCredentialsDto: SignUpCredentialsDto
    ): Promise<void> {
        return  this.authService.signUp(signUpCredentialsDto)
    }

    @Post('signin')
    signIn(
        @Body() signInCredentialsDto: SignInCredentialsDto
    ): Promise<{ accessToken: string }> {
        return this.authService.signIn(signInCredentialsDto)
    }

    @Get('users')
    @UseGuards(AuthGuard())
    getUsers(
        @GetUser() user: User,
    ): Promise<User[]> {
        return this.authService.getUsers(user)
    }

    @Get('users/me')
    @UseGuards(AuthGuard())
    getUserButMe(
        @GetUser() user: User
    ): Promise<User> {
        return this.authService.getUserButMe(user)
    }

    @Get(':id')
    @UseGuards(AuthGuard())
    getUserByID(
        @Param('id') id: string,
        @GetUser() user: User
    ): Promise<any> {
        return this.authService.getUserbByID(id, user)
    }

    @Patch('update')
    @UseGuards(AuthGuard())
    updateAccount(
        @Body() updateAccountDto: UpdateAccountDto,
        @GetUser() user: User,
    ): Promise<User> {
        return this.authService.updateAccount(updateAccountDto, user)
    }

    @Delete(':id')
    @UseGuards(AuthGuard())
    deleteUser(
        @Param('id') id: string,
        @GetUser() user: User,
    ): Promise<DeleteResult> {
        return this.authService.deleteUser(id, user)
    }
}
