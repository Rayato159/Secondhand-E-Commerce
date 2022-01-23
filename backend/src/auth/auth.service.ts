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
import { DeleteResult } from 'typeorm';

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

        const user = await this.userRepository.findOne({ email: email.toLocaleLowerCase() })

        if(user && await bcrypt.compare(password, user.password)) {
            const payload: JwtPayload = { email: email.toLocaleLowerCase() }
            const accessToken: string = this.jwtService.sign(payload)
            return { accessToken }
        } else {
            throw new NotFoundException({
                message: ['Never gonna give you up.']
            })
        }

    }

    // Admin
    async getUsers(): Promise<User[]> {
        try {
            const users = await this.userRepository.find()
            return users
        } catch(e) {
            throw new NotFoundException({
                message: ['Users are empty.']
            })
        }
    }

    async getUserbByID(id: string): Promise<any> {
        try {
            const user = await this.userRepository.findOne(id)
            const {
                first_name,
                last_name,
                phone,
                picture,
                cheater,
            } = user

            return {
                first_name,
                last_name,
                phone,
                picture,
                cheater,
            }

        } catch(e) {
            throw new NotFoundException({
                message: ['Users are empty.']
            })
        }
    }

    async getUserButMe(user: User):  Promise<User> {
        try{
            const userButMe = await this.userRepository.findOne(user.id)
            return userButMe
        } catch(e) {
            throw new NotFoundException({
                message: ['Never gonna give you up.']
            })
        }
    }

    async updateAccount(updateAcoountDto: UpdateAccountDto, user: User): Promise<User> {
        return this.userRepository.updateAccount(updateAcoountDto, user)
    }


    // Admin
    async deleteUser(id: string, user: User): Promise<DeleteResult> {

        try {
            const userDelete =  await this.userRepository.delete(id)
            return userDelete
        } catch(e) {
            throw new NotFoundException({
                message: ['User not found']
            })
        }
    }
}