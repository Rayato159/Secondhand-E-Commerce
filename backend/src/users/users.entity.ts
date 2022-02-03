import { Products } from "src/products/products.entity";
import { ProfilePhotos } from "src/profile-photos/profile-photos.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Role } from "./enum/role.enum";

@Entity({ name: 'users' })
export class Users {

    @PrimaryGeneratedColumn('uuid')
    user_id: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    address: string

    @Column()
    phone_number: string

    @Column({ type: 'enum', enum: Role, default: Role.User })
    role: Role

    @CreateDateColumn()
    created: Date

    @UpdateDateColumn()
    updated: Date

    @OneToMany(type => Products, products => products.user)
    products: Products[]
}