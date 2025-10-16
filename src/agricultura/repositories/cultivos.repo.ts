import { ICultivo } from "agricultura/types/ICultivos";
import { ICultivoMongo } from "agricultura/types/ICultivos";
import { Types } from "mongoose";

export interface ICultivosRepo {
  findByID(id: any): Promise<ICultivo[] | null>;

  findAll(id: Types.ObjectId): Promise<ICultivo[]>;

  create(element: ICultivo, id: string): Promise<ICultivoMongo>;
  update(id: any, element: Partial<ICultivo>,): Promise<ICultivo | null>;
  Delete(id: any): Promise<void>;
}
