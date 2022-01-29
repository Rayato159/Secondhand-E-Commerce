import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

    @Column({ default: () => Role.User })
    role: Role

    @CreateDateColumn()
    created: Date

    @UpdateDateColumn()
    updated: Date
}