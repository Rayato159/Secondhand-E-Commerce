import { Products } from "src/products/products.entity";
import { Users } from "src/users/users.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'carts' })
export class Carts {

    @PrimaryGeneratedColumn('uuid')
    cart_id: string

    @ManyToOne(type => Users, user => user.carts, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'user_id' })
    user: Users
    

    @ManyToOne(type => Products, product => product.carts, {
        eager: true,
        onUpdate: 'CASCADE'
    })
    @JoinColumn({ name: 'cart_id' })
    product: Products
}