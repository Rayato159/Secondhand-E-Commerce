import { EntityRepository, Repository } from "typeorm";
import { ConflictException, NotFoundException } from "@nestjs/common";
import * as bcrypt from 'bcrypt'

import { User } from './user.entity'
import { SignUpCredentialsDto } from './dto/signup-credentials.dto'
import { UpdateAccountDto } from "./dto/update-account.dto";

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
            email: email.toLocaleLowerCase(),
            password: hashedPassword,
            phone,
            birthday,
        })

        await this.save(user)
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
            const updatedUser = await this.findOne(user.id)

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

            await this.save(updatedUser)
            return 'success'
        } catch(error) {
            throw new NotFoundException('User not found :(')
        }
    }
}