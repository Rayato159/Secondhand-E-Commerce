import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from './dto/register.dto';
import { Users } from './users.entity';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt'
import { EditUserDto } from './dto/edit-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository
    ) {}

    async register(registerDto: RegisterDto): Promise<Users> {
        try {
            const {
                email,
                password,
                password_confirm,
                ...details
            } = registerDto

            if(password_confirm !== password) {
                throw new BadRequestException()
            }
    
            const hash = bcrypt.hashSync(password, 10)
            const user = this.usersRepository.create({
                email: email.toLocaleLowerCase(),
                password: hash,
                ...details
            })
    
            return await this.usersRepository.save(user)
        } catch(e) {
            throw new BadRequestException({
                message: ['Please check your information and try again.']
            })
        }
    }

    async findOneUser(email: string): Promise<Users | undefined> {
        const user = this.usersRepository.findOne({ email: email.toLocaleLowerCase() })
        return user
    }

    async getUsers(): Promise<Users[]> {
        try {
            const users = await this.usersRepository.find()
            return users
        } catch(e) {
            throw new NotFoundException({
                message: 'Users are empty.'
            })
        }
    }

    async getUserById(user_id: string): Promise<Users> {
        try {
            const user = await this.usersRepository.findOne(user_id)
            return user
        } catch(e) {
            throw new NotFoundException({
                message: 'User not found.'
            })
        }
    }

    async editUserInfo(user: Users, editUserDto: EditUserDto): Promise<Users> {
        try {
            const {
                address,
                phone_number,
                password,
                password_confirm
            } = editUserDto

            const userProfile = await this.getUserById(user.user_id)
            const userPassword = userProfile.password

            if(!await bcrypt.compare(password, userPassword) || password !== password_confirm) {
                throw new BadRequestException()
            }

            if(address) {
                userProfile.address = address
            }

            if(phone_number) {
                userProfile.phone_number = phone_number
            }

            return await this.usersRepository.save(userProfile)
        } catch(e) {
            throw new BadRequestException({
                message: 'User not found or getting some error.'
            })
        }
    }

    async changePassword(user: Users, changePasswordDto: ChangePasswordDto): Promise<string> {
        try {
            const getUser = await this.getUserById(user.user_id)
            const userPassword = getUser.password

            const {
                old_password,
                new_password,
                new_password_confirm,
            } = changePasswordDto

            if(!await bcrypt.compare(old_password, userPassword) 
                || new_password !== new_password_confirm
                || await bcrypt.compare(new_password, userPassword)
            ) {
                throw new BadRequestException()
            }

            const hash = bcrypt.hashSync(new_password, 10)
            getUser.password = hash

            await this.usersRepository.save(getUser)
            return 'Success'

        } catch(e) {
            throw new BadRequestException({
                message: 'Please check your password and try again.'
            })
        }
    }

    async deleteUser(user_id: string): Promise<Users> {
        try {
            const user = this.getUserById(user_id)
            await this.usersRepository.delete(user_id)
            return user
        } catch(e) {
            throw new NotFoundException({
                message: 'User not found.'
            })
        }
    }
}
