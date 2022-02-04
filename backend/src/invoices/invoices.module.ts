import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from 'src/products/products.module';
import { ProductsRepository } from 'src/products/products.repository';
import { RolesGuard } from 'src/users/roles.guard';
import { InvoicesController } from './invoices.controller';
import { InvoicesRepository } from './invoices.repository';
import { InvoicesService } from './invoices.service';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forFeature([
      InvoicesRepository,
      ProductsRepository,
    ])
  ],
  controllers: [InvoicesController],
  providers: [InvoicesService, RolesGuard],
})
export class InvoicesModule {}
