import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentsRepository } from './payments.repository';

@Injectable()
export class PaymentsService {
    constructor(
        @InjectRepository(PaymentsRepository)
        private paymentsRepository: PaymentsRepository
    ) {}
}
