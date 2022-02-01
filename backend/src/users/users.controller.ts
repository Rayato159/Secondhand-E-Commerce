import { Body, Controller, Delete, Get, Param, Patch, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { ChangePasswordDto } from './dto/change-password.dto';
import { EditUserDto } from './dto/edit-user.dto';
import { Role } from './enum/role.enum';
import { UsersInterceptor } from './interceptors/users.interceptor';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard';
import { User } from './users.decorator';
import { Users } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @UseGuards(JwtAuthGuard)
    @UseInterceptors(UsersInterceptor)
    @Patch('edit')
    editUserInfo(
        @User() user: Users,
        @Body() editUserDto: EditUserDto,
    ): Promise<Users> {
        return this.usersService.editUserInfo(user, editUserDto)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Get()
    getUsers(): Promise<Users[]> {
        return this.usersService.getUsers()
    }

    @UseInterceptors(UsersInterceptor)
    @Get(':user_id/info')
    getUserById(
        @Param('user_id') user_id: string,
    ): Promise<Users> {
        return this.usersService.getUserById(user_id)
    }

    @UseGuards(JwtAuthGuard)
    @Patch('change_password')
    changePassword(
        @User() user: Users,
        @Body() changePasswordDto: ChangePasswordDto,
    ): Promise<string> {
        return this.usersService.changePassword(user, changePasswordDto)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':user_id/delete')
    deleteUser(
        @Param('user_id') user_id: string
    ): Promise<Users> {
        return this.usersService.deleteUser(user_id)
    }
}
