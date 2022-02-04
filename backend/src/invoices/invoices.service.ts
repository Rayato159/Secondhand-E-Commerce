import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsService } from 'src/products/products.service';
import { Users } from 'src/users/users.entity';
import { Invoices } from './invoices.entity';
import { InvoicesRepository } from './invoices.repository';

@Injectable()
export class InvoicesService {
    constructor(
        @InjectRepository(InvoicesRepository)
        private invoicesRepository: InvoicesRepository,
        private productsService: ProductsService
    ) {}

    async createInvoices(product_id: string, user: Users): Promise<Invoices> {
        try {
            const res = await this.productsService.updateProductStatus(product_id)

            const invoice = this.invoicesRepository.create({
                product: res,
                user,
            })

            return await this.invoicesRepository.save(invoice)
        } catch(e) {
            throw new BadRequestException({
                message: 'Please check your purchase order.'
            })
        }
    }
}
