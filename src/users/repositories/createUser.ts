import { IUser } from "users/types/UserType";

export interface IcreateUser {
    createUser(user: IUser): Promise<IUser>
}