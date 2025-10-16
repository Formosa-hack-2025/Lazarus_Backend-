import { mongoModel } from "Crud_basic/Models/basic.mongo";
import { IBasicRepo } from "Crud_basic/repositories/basic.repo";
import { elemento } from "Crud_basic/types/basic_crud";




export class repoMongo implements IBasicRepo {
    async findByID(id: any): Promise<elemento[] | null> {
        return await mongoModel.findById(id)
    }
    async findAll(): Promise<elemento[]> {
        return await mongoModel.find()
    }
    async create(element: elemento): Promise<elemento> {
        const result = new mongoModel(element);
        return await result.save()
    }
    async Delete(id: any): Promise<void> {
        await mongoModel.findByIdAndDelete(id)
    }
    async update(element: Partial<elemento>): Promise<elemento | null> {
        return await mongoModel.findByIdAndUpdate(element)
    }
}