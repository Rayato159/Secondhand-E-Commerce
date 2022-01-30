import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from './dto/register.dto';
import { Users } from './users.entity';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt'

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
                passwordConfirm,
                ...details
            } = registerDto

            if(passwordConfirm !== password) {
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
}
