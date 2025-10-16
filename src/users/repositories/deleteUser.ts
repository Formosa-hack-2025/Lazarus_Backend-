import { ID } from "@config/id.type";



export interface IDeleteUser {
    DeleteUser(id: ID): Promise<void>
}