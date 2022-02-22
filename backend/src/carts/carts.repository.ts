import { EntityRepository, Repository } from "typeorm";
import { Carts } from "./carts.entity";

@EntityRepository(Carts)
export class CartsRepository extends Repository<Carts> {}