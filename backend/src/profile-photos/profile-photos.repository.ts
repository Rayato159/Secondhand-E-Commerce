import { EntityRepository, Repository } from "typeorm";
import { ProfilePhotos } from "./profile-photos.entity";

@EntityRepository(ProfilePhotos)
export class ProfilePhotosRepository extends Repository<ProfilePhotos> {}