import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guards';

@Controller('users')
export class UsersController {
    
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req: any): Promise<any> {
        return req.user
  }
}
