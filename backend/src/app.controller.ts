import { Body, Controller, Post } from '@nestjs/common'
import { RegisterDto } from './users/dto/register.dto';
import { Users } from './users/users.entity';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
    constructor(private userService: UsersService) {}

    @Post('register')
    register(
        @Body() registerDto: RegisterDto
    ): Promise<Users> {
        return this.userService.register(registerDto)
    }
}