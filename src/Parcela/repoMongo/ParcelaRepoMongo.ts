
import { ParcelaModel } from "Parcela/Models/Parcela.Models";
import { ICreateParcelaRepo } from "Parcela/repositories/CreateParcela.Repo";
import { IDeleteParcelaRepo } from "Parcela/repositories/DeleteGanado.Repo";
import { IfindParcelaRepo } from "Parcela/repositories/Find.repo";
import { IUpdateParcelaRepo } from "Parcela/repositories/UpdateGanado.Repo";
import { IParcela } from "Parcela/types/parcelaType";




export class FindParcelaMongoRepo implements IfindParcelaRepo {
    async findByID(id: any): Promise<IParcela[] | null> {
        return await ParcelaModel.findById(id)
    }
    async findAll(): Promise<IParcela[]> {
        return await ParcelaModel.find()
    }
}

export class CreateParcelaMongo implements ICreateParcelaRepo {
    async create(parcela: IParcela): Promise<IParcela> {
        const result = new ParcelaModel(parcela);
        return await result.save()
    }

}

export class UpdateParcelaMongo implements IUpdateParcelaRepo {

    async update(id: any, parcela: Partial<IParcela>): Promise<IParcela | null> {
        return await ParcelaModel.findByIdAndUpdate(id, parcela, { new: true })
    }
}
export class DeleteParcelaMongo implements IDeleteParcelaRepo {
    async Delete(id: any): Promise<void> {
        await ParcelaModel.findByIdAndDelete(id)
    }
}