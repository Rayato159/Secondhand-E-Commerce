import { Products } from "src/products/products.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'categories' })
export class Categories {

    @PrimaryGeneratedColumn('uuid')
    category_id: string

    @Column()
    name: string

    @OneToMany(type => Products, products => products.category)
    products: Products[]
}