import { ID } from "@config/id.type";

export interface IUser {
    id: any
    readonly name: string;
    readonly latsName: string;
    readonly cuil: number;
    readonly birthDate: Date;
    readonly email: string;
    readonly password: string;
    readonly rol: string;
}