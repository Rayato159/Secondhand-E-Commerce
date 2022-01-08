import { UserRoleEnum } from "../enum/user-role.enum";

export interface JwtPayload {
    id: string
    role: UserRoleEnum
}