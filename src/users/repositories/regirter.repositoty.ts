import { IUser } from "users/types/UserType";


export interface IRegisterRepoAdmin {
    createUser(user: IUser, token?: string): Promise<IUser>
}