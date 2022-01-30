import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local/local-auth.guards';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService,) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() { user }: any): Promise<any> {
        return {
            ...user,
            ...await this.authService.login(user),
        }
    }
}
