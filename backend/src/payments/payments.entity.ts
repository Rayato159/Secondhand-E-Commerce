import { Carts } from "src/carts/carts.entity";
import { Users } from "src/users/users.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'payments' })
export class Payments {

    @PrimaryGeneratedColumn('uuid')
    payment_id: string

    @ManyToOne(type => Users, user => user.payments, {
        eager: true,
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'user_id' })
    user: Users

    @OneToOne(() => Carts, { eager: true })
    @JoinColumn({ name: 'cart_id' })
    cart: Carts

    @Column({ type: 'double precision' })
    total: number

    @Column()
    address: string

    @CreateDateColumn()
    created: Date
}