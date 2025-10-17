import { Iganado } from "Ganado/types/ganadoType";


export interface ICreateGanadoRepo {
    create(ganado: Iganado): Promise<Iganado>

}