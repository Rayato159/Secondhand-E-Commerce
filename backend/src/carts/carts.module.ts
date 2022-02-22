import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartsRepository } from './carts.repository';
import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    TypeOrmModule.forFeature([
      CartsRepository,
    ]),
  ],
  providers: [CartsService],
  controllers: [CartsController],
  exports: [CartsService]
})
export class CartsModule {}
