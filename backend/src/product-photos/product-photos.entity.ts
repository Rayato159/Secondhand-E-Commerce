import { Products } from "src/products/products.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'product_photos' })
export class ProductPhotos {

    @PrimaryGeneratedColumn('uuid')
    product_photo_id: string

    @Column()
    path: string

    @Column()
    name: string

    @ManyToOne(type => Products, product => product.product_photos, {
        eager: true,
        onDelete: 'CASCADE'
    })
    @JoinColumn({ 
        name: 'product_id',
    })
    product: Products
}