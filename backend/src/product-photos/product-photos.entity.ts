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
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ 
        name: 'product_photo_id',
    })
    product: Products
}