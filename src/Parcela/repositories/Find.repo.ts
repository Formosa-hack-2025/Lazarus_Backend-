import { IParcela } from "Parcela/types/parcelaType"


export interface IfindParcelaRepo {
    findByID(id: any): Promise<IParcela[] | null>
    findAll(): Promise<IParcela[]>

}
