import { Product } from "src/product/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({ type: 'date' })
    birthday: Date

    @Column({ default: '' })
    picture: string

    @Column({ type: 'boolean', default: false})
    cheater: boolean

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    created: Date

    @OneToMany((_type) => Product, (products) => products.user, { eager: true })
    products: Product[]
}