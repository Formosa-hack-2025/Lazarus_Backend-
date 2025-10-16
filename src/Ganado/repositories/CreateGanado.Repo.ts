import { Iganado } from "Crud_basic/types/ganadoType";


export interface ICreateGanadoRepo {
    create(ganado: Iganado): Promise<Iganado>

}