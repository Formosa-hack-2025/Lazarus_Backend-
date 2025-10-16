import { Iganado } from "Ganado/types/ganadoType";


export interface IUpdateGanadoRepo {
    update(ganado: Partial<Iganado>, id: any): Promise<Iganado | null>

}