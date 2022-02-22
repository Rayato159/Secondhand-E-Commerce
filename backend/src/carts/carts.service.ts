import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartsRepository } from './carts.repository';

@Injectable()
export class CartsService {
    constructor(
        @InjectRepository(CartsRepository)
        private cartsRepository: CartsRepository,
    ) {}
}
