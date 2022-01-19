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
            role,
        } = signUpCredentialsDto

        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)

        const emailCheck = await this.findOne({ email: email.toLocaleLowerCase() })
        if(emailCheck) {
            throw new ConflictException({
                message: ['This email has been already using.']
            })
        }

        if(!role) {
            const user = this.create({
                first_name,
                last_name,
                email: email.toLocaleLowerCase(),
                password: hashedPassword,
                phone,
            })

            await this.save(user)

        } else {
            const user = this.create({
                first_name,
                last_name,
                email: email.toLocaleLowerCase(),
                password: hashedPassword,
                phone,
                role,
            })
    
            await this.save(user)
        }
    }

    async updateAccount(updateAcoountDto: UpdateAccountDto, user: User): Promise<User> {
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
                const salt = await bcrypt.genSalt()
                const hashedPassword = await bcrypt.hash(password, salt)
                updatedUser.password = hashedPassword
            }

            if(picture) {
                updatedUser.picture = picture
            }

            await this.save(updatedUser)
            return updatedUser
            
        } catch(error) {
            throw new NotFoundException({
                message: ['Never gonna give you up.']
            })
        }
    }
}