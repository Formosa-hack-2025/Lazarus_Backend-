import { IParcela } from "Parcela/types/parcelaType";


export interface ICreateParcelaRepo {
    create(parcela: IParcela): Promise<IParcela>

}