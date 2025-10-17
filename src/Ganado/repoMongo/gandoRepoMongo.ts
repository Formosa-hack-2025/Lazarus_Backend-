import { ID } from "@config/id.type";
import { GanadoModel } from "Ganado/Models/ganado.Model";
import { ICreateGanadoRepo } from "Ganado/repositories/CreateGanado.Repo";
import { IDeleteGanadoRepo } from "Ganado/repositories/DeleteGanado.Repo";
import { IfindGanadoRepo } from "Ganado/repositories/Find.repo";

import { IUpdateGanadoRepo } from "Ganado/repositories/UpdateGanado.Repo";
import { Iganado } from "Ganado/types/ganadoType";




export class FindGanadoMongoRepo implements IfindGanadoRepo {
    async findByID(id: any): Promise<Iganado[] | null> {
        return await GanadoModel.findById(id)
    }
    async findAll(): Promise<Iganado[]> {
        return await GanadoModel.find()
    }
}

export class CreateGanadoMongo implements ICreateGanadoRepo {
    async create(ganado: Iganado): Promise<Iganado> {
        const result = new GanadoModel(ganado);
        return await result.save()
    }

}

export class UpdateGanadoMongo implements IUpdateGanadoRepo {

    async update(id: any, ganado: Partial<Iganado>): Promise<Iganado | null> {
        return await GanadoModel.findByIdAndUpdate(id, ganado, { new: true })
    }
}
export class DeleteGanadoMongo implements IDeleteGanadoRepo {
    async Delete(id: any): Promise<void> {
        await GanadoModel.findByIdAndDelete(id)
    }
}