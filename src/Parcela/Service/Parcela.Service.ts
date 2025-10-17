import { ICreateParcelaRepo } from "Parcela/repositories/CreateParcela.Repo"
import { IDeleteParcelaRepo } from "Parcela/repositories/DeleteGanado.Repo"
import { IfindParcelaRepo } from "Parcela/repositories/Find.repo"
import { IUpdateParcelaRepo } from "Parcela/repositories/UpdateGanado.Repo"
import { IParcela } from "Parcela/types/parcelaType"


export class CreateParcelaervice implements ICreateParcelaRepo {
    constructor(
        private readonly createMongoRepo: ICreateParcelaRepo
    ) { }
    async create(parcela: IParcela): Promise<IParcela> {
        return await this.createMongoRepo.create(parcela)
    }
}
export class UpdateParcelaService implements IUpdateParcelaRepo {
    constructor(
        private readonly updateMongoRepo: IUpdateParcelaRepo
    ) { }
    async update(id: any, parcela: Partial<IParcela>): Promise<IParcela | null> {
        return await this.updateMongoRepo.update(id, parcela)
    }
}

export class DeleteParcelaService implements IDeleteParcelaRepo {
    constructor(
        private readonly deleteMongoRepo: IDeleteParcelaRepo
    ) { }

    async Delete(id: any): Promise<void> {
        await this.deleteMongoRepo.Delete(id)
    }
}
export class FindParcelaService implements IfindParcelaRepo {
    constructor(
        private readonly findMongoRepo: IfindParcelaRepo
    ) { }
    async findAll(): Promise<IParcela[]> {
        return this.findMongoRepo.findAll()
    }
    async findByID(id: any): Promise<IParcela[] | null> {
        return this.findMongoRepo.findByID(id)
    }
}