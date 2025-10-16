import { Iganado } from "Crud_basic/types/ganadoType";


export interface IfindGanadoRepo {
    findByID(id: any): Promise<Iganado[] | null>
    findAll(): Promise<Iganado[]>

}
