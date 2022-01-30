import { EntityRepository, Repository } from "typeorm";
import { Products } from "./products.entity";

@EntityRepository(Products)
export class ProductsRepository extends Repository<Products> {}