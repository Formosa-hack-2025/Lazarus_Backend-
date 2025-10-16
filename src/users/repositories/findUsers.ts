import { IUser } from "users/types/UserType";

export interface IFindUsers {
    findUsers(): Promise<IUser[]>
    findUserById(id: any): Promise<IUser | null>
}