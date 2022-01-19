import { Exclude } from "class-transformer";
import { User } from "src/auth/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

    @Column({ default: '' })
    picture: string

    // Default
    @CreateDateColumn()
    created_at: Date;
        
    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne((_type) => User, (user) => user.products, { eager: false })
    @Exclude({ toPlainOnly: true })
    user: User
}