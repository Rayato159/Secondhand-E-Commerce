import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductPhotosRepository } from './product-photos.repository';

@Injectable()
export class ProductPhotosService {
    constructor(
        @InjectRepository(ProductPhotosRepository)
        private productPhotosRepository: ProductPhotosRepository
    ) {}
}
