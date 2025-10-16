import { IBasicRepo } from "Crud_basic/repositories/basic.repo";
import { elemento } from "Crud_basic/types/basic_crud";




export class BasicService implements IBasicRepo {
    constructor(
        private readonly mongorepo: IBasicRepo,

    ) { }
    async create(element: elemento): Promise<elemento> {
        return await this.mongorepo.create(element)
    }
    async findAll(): Promise<elemento[]> {
        return await this.mongorepo.findAll()
    }
    async findByID(id: any): Promise<elemento[] | null> {
        return await this.mongorepo.findByID(id)
    }
    async update(element: Partial<elemento>, id: any): Promise<elemento | null> {
        return await this.mongorepo.update(element, id)
    }
    async Delete(id: any): Promise<void> {
        await this.mongorepo.Delete(id)
    }
}