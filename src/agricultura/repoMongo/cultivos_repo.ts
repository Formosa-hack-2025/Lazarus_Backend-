import { ICultivosRepo } from "agricultura/repositories/cultivos.repo";
import { ICultivo } from "agricultura/types/ICultivos";
import { CultivoModel } from "agricultura/Models/cultivo.mongo";
import { ICultivoMongo } from "agricultura/types/ICultivos";
import { Types } from "mongoose";

export class repoMongo implements ICultivosRepo {
  async findByID(id: any): Promise<ICultivo[] | null> {
    return await CultivoModel.findById(id);
  }

  async findAll(id: Types.ObjectId): Promise<ICultivo[]> {
    return await CultivoModel.find({ idUser: id });
  }

  async create(element: ICultivo): Promise<ICultivoMongo> {
    const result = new CultivoModel(element);
    return await result.save();
  }
  async Delete(id: any): Promise<void> {
    await CultivoModel.findByIdAndDelete(id);
  }
  async update(element: Partial<ICultivo>): Promise<ICultivo | null> {
    return await CultivoModel.findByIdAndUpdate(element);
  }
}
