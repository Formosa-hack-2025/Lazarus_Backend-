import { elemento } from "Crud_basic/types/basic_crud";


export interface IBasicRepo {
    findByID(id: any): Promise<elemento[] | null>
    findAll(): Promise<elemento[]>
    create(element: elemento): Promise<elemento>
    update(element: Partial<elemento>, id: any): Promise<elemento | null>
    Delete(id: any): Promise<void>
}
