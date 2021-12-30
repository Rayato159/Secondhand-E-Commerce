import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

import { SignUpCredentialsDto } from './dto/signup-credentials.dto';
import { SignInCredentialsDto } from './dto/signin-credentials.dto';
import { UserRepository } from './user.repository';
import { JwtPayload } from './jwt/jwt-payload.interface';
import { UpdateAccountDto } from './dto/update-account.dto'
import { User } from './user.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService,
    ) {}

    async signUp(signUpCredentialsDto: SignUpCredentialsDto): Promise<void> {
        return this.userRepository.signUp(signUpCredentialsDto)
    }

    async signIn(signInCredentialsDto: SignInCredentialsDto): Promise<{ accessToken: string }> {
        const { email, password } = signInCredentialsDto

        const user = await this.userRepository.findOne({ email })
        if(user && await bcrypt.compare(password, user.password)) {
            const payload: JwtPayload = { email }
            const accessToken: string = await this.jwtService.sign(payload)
            return { accessToken }
        } else {
            throw new NotFoundException('Please check your email or password.')
        }
    }

    async updateAccount(updateAcoountDto: UpdateAccountDto, user: User): Promise<string> {
        const {
            first_name,
            last_name,
            phone,
            password,
            picture,
        } = updateAcoountDto

        try {
            const updatedUser = await this.userRepository.findOne(user.id)

            if(first_name) {
                updatedUser.first_name = first_name
            }

            if(last_name) {
                updatedUser.last_name = last_name
            }

            if(phone) {
                updatedUser.phone = phone
            }

            if(password) {
                updatedUser.password = password
            }

            if(picture) {
                updatedUser.picture = picture
            }

            await this.userRepository.save(updatedUser)
            return 'success'
        } catch(error) {
            throw new NotFoundException('User not found :(')
        }
    }
}