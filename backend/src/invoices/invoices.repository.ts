import { EntityRepository, Repository } from "typeorm";
import { Invoices } from "./invoices.entity";

@EntityRepository(Invoices)
export class InvoicesRepository extends Repository<Invoices> {}