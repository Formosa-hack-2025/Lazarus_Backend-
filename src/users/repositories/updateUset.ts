import { ID } from "@config/id.type";
import { IUser } from "users/types/UserType";



export interface IUpadateUser {
    updateUser(id: ID, user: Partial<IUser>): Promise<IUser | null>
}