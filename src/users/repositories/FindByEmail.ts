import { IUser } from "users/types/UserType";



export interface IFindByEmail {
    findByEmail(email: string): Promise<IUser | null>
}