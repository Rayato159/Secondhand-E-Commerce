import { EntityRepository, Repository } from "typeorm";
import { ProductPhotos } from "./product-photos.entity";

@EntityRepository(ProductPhotos)
export class ProductPhotosRepository extends Repository<ProductPhotos> {}