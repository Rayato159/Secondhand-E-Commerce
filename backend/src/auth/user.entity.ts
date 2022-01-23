import { Product } from "src/product/product.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    phone: string

    @Column()
    email: string

    @Column()
    password: string

    @Column({ default: '' })
    picture: string

    @Column({ type: 'boolean', default: false})
    cheater: boolean

    // Default
    @CreateDateColumn()
    created_at: Date;
        
    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany((_type) => Product, (products) => products.user, { eager: true })
    products: Product[]
}