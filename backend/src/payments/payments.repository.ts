import { EntityRepository, Repository } from "typeorm";
import { Payments } from "./payments.entity";

@EntityRepository(Payments)
export class PaymentsRepository extends Repository<Payments> {}