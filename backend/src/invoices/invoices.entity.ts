import { Products } from "src/products/products.entity";
import { Users } from "src/users/users.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'invoices' })
export class Invoices {

    @PrimaryGeneratedColumn('uuid')
    invoice_id: string

    @OneToOne(() => Products, {
        eager: true,
        cascade: true,
    })
    @JoinColumn({ 
        name: 'product_id',
    })
    product: Products

    @ManyToOne(type => Users, user => user.invoices, {
        eager: true,
        cascade: true,
        nullable: true,
    })
    @JoinColumn({ 
        name: 'user_id',
    })
    user: Users

    @CreateDateColumn()
    created: Date
}