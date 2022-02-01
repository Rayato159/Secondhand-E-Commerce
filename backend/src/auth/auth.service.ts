import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findOneUser(email)
        if(user && await bcrypt.compare(password, user.password)) {
            const { 
                password, 
                created, 
                updated, 
                ...details 
            } = user
            return details
        }
        return null
    }

    async login(user: any) {
        const payload = { 
            user_id: user.user_id,
            role: user.role
        }
        return {
            accessToken: this.jwtService.sign(payload)
        }
    }
}
