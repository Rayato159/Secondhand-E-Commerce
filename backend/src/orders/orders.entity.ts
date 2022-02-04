import { Products } from "src/products/products.entity";
import { Users } from "src/users/users.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'orders' })
export class Orders {

    @PrimaryGeneratedColumn('uuid')
    order_id: string

    @ManyToOne(type => Products, product => product.orders, {
        eager: true,
        cascade: true,
        nullable: true,
    })
    @JoinColumn({ 
        name: 'product_id',
    })
    product: Products

    @ManyToOne(type => Users, user => user.orders, {
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