import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

import { SignUpCredentialsDto } from './dto/signup-credentials.dto';
import { SignInCredentialsDto } from './dto/signin-credentials.dto';
import { UserRepository } from './user.repository';
import { JwtPayload } from './jwt/jwt-payload.interface';
import { UpdateAccountDto } from './dto/update-account.dto'
import { User } from './user.entity';
import { UserRoleEnum } from './enum/user-role.enum';

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
        const role = user.role
        const id = user.id

        if(user && await bcrypt.compare(password, user.password)) {
            const payload: JwtPayload = { id, role }
            const accessToken: string = this.jwtService.sign(payload)
            return { accessToken }
        } else {
            throw new NotFoundException('Please check your email or password.')
        }

    }

    async getUsers(user: User): Promise<User[]> {
        if(user.role !== UserRoleEnum.ADMIN) {
            throw new ForbiddenException('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        }

        try {
            const users = await this.userRepository.find()
            return users
        } catch(e) {
            throw new NotFoundException('Users are empty.')
        }
    }

    async getUserbByID(id: string, user: User): Promise<any> {
        try {
            const findUser = await this.userRepository.findOne(id)
            if(user.role !== UserRoleEnum.ADMIN){
                const {
                    id,
                    first_name,
                    last_name,
                    phone,
                    picture,
                    cheater,
                    products,
                } = user

                const userFindNormal = {
                    id,
                    first_name,
                    last_name,
                    phone,
                    picture,
                    cheater,
                    products,
                }

                return userFindNormal
            }

            return findUser

        } catch(e) {
            throw new NotFoundException('User not found.')
        }
    }

    async updateAccount(updateAcoountDto: UpdateAccountDto, user: User): Promise<string> {
        return this.userRepository.updateAccount(updateAcoountDto, user)
    }

    async deleteUser(id: string, user: User): Promise<User> {

        if(user.role !== UserRoleEnum.ADMIN) {
            throw new ForbiddenException('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        }

        try {
            const userDelete = await this.userRepository.findOne(id)
            await this.userRepository.delete(id)
            return userDelete
        } catch(e) {
            throw new NotFoundException('User not found')
        }
    }
}