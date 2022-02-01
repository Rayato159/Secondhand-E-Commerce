import { Users } from "src/users/users.entity";
import { Status } from '../products/enum/status.enum'
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Exclude } from "class-transformer";

@Entity({ name: 'products' })
export class Products {

    @PrimaryGeneratedColumn('uuid')
    product_id: string

    @Column()
    title: string

    @Column()
    description: string

    @Column({ type: 'double precision' })
    price: number

    @Column({ default: Status.Avaliable })
    status: Status

    @CreateDateColumn()
    created: Date

    @UpdateDateColumn()
    updated: Date

    @ManyToOne(type => Users, user => user.products, {
        onDelete: "CASCADE"
    })
    @JoinColumn({ name: "zone_id" })
    @Exclude({ toPlainOnly: true })
    user: Users
}