import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'profile_photos' })
export class ProfilePhotos {

    @PrimaryGeneratedColumn('uuid')
    profile_photos_id: string

    @Column()
    path: string

    @Column()
    name: string
}