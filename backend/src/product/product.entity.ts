import { Exclude } from "class-transformer";
import { User } from "src/auth/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { ProductCategory } from "./enum/product-category.enum";
import { ProductStatus } from "./enum/product-status.enum";

@Entity({ name: 'products' })
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    product_name: string
    
    @Column({ type: 'double precision' })
    price: number

    @Column()
    description: string

    @Column()
    address: string

    @Column()
    status: ProductStatus

    @Column()
    category: ProductCategory

    @Column({ default: '' })
    picture: string

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    created: Date

    @ManyToOne((_type) => User, (user) => user.products, { eager: false })
    @Exclude({ toPlainOnly: true })
    user: User
}