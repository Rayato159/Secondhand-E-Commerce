import { Products } from "src/products/products.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Role } from "./enum/role.enum";

@Entity({ name: 'users' })
export class Users {

    @PrimaryGeneratedColumn('uuid')
    userId: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    address: string

    @Column()
    phoneNumber: string

    @Column({ default: Role.User })
    role: Role

    @CreateDateColumn()
    created: Date

    @UpdateDateColumn()
    updated: Date

    @OneToMany(type => Products, products => products.user)
    products: Products[]
}