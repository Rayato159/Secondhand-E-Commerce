import { Users } from "src/users/users.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'profile_photos' })
export class ProfilePhotos {

    @PrimaryGeneratedColumn('uuid')
    profile_photos_id: string

    @Column()
    path: string

    @Column()
    name: string

    @OneToOne(() => Users, {
        eager: true,
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'user_id' })
    user: Users
}