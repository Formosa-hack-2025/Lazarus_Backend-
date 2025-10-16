import { ICultivosRepo } from "agricultura/repositories/cultivos.repo";
import { ICultivo } from "agricultura/types/ICultivos";
import { ICultivoMongo } from "agricultura/types/ICultivos";
import { Types } from "mongoose";

export class CultivoService implements ICultivosRepo {
  constructor(private readonly mongorepo: ICultivosRepo) {}

  async create(element: ICultivo, id: string): Promise<ICultivoMongo> {
    return await this.mongorepo.create(element, id);
  }

  async findAll(id: Types.ObjectId): Promise<ICultivo[]> {
    return await this.mongorepo.findAll(id);
  }

  async findByID(id: any): Promise<ICultivo[] | null> {
    return await this.mongorepo.findByID(id);
  }

  async update(element: Partial<ICultivo>, id: any): Promise<ICultivo | null> {
    return await this.mongorepo.update(element, id);
  }

  async Delete(id: any): Promise<void> {
    await this.mongorepo.Delete(id);
  }
}
