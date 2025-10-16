import { elemento } from "Crud_basic/types/basic_crud";
import mongoose, { Schema } from "mongoose";



export const basicModel = new Schema<elemento>({
    nombre: {
        type: String,
        required: true
    }
})

export const mongoModel = mongoose.model<elemento>("Users", basicModel)