import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt'
import { JwtPayload } from "./jwt-payload.interface";

import { UserRepository } from "../user.repository";
import { User } from "../user.entity";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) {
        super({
            secretOrKey: 'Rasputin',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        });
    }

    async validate(payload: JwtPayload): Promise<User> {
        const { email } = payload
        try{
            const user: User = await this.userRepository.findOne({ email })
            return user
        } catch(error) {
            throw new UnauthorizedException()
        }
    }
}

