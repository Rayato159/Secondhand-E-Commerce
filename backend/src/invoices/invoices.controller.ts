import { Controller, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { User } from 'src/users/users.decorator';
import { Users } from 'src/users/users.entity';
import { Invoices } from './invoices.entity';
import { InvoicesService } from './invoices.service';

@Controller('invoices')
export class InvoicesController {
    constructor(private invoicesService: InvoicesService) {}

    @UseGuards(JwtAuthGuard)
    @Post(':product_id/create')
    createInvoice(
        @Param('product_id') product_id: string,
        @User() user: Users,
    ): Promise<Invoices> {
        return this.invoicesService.createInvoices(product_id, user)
    }
}
