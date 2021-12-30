import { EntityRepository, Repository } from "typeorm";
import * as bcrypt from 'bcrypt'

import { User } from './user.entity'
import { SignUpCredentialsDto } from './dto/signup-credentials.dto'
import { ConflictException } from "@nestjs/common";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp(signUpCredentialsDto: SignUpCredentialsDto): Promise<void> {
        const {
            first_name,
            last_name,
            email,
            password,
            phone,
            birthday,
        } = signUpCredentialsDto

        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)

        const emailCheck = await this.findOne({ email })
        if(emailCheck) {
            throw new ConflictException('This email has been already using.')
        }

        const user = this.create({
            first_name,
            last_name,
            email,
            password: hashedPassword,
            phone,
            birthday,
        })

        await this.save(user)
    }
}