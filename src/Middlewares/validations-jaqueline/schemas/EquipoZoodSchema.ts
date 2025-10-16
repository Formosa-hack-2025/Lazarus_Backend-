import { z } from "zod";

export const equipoZodSchema = z.object({
    type: z.string().min(1, "El tipo es requerido"),
    fechaEntrega: z.coerce.date().optional(),
    mejora: z.string().optional(),
    Ram: z.number().min(1, "La RAM debe ser mayor a 0"),
    Modelo: z.string().min(1, "El modelo es requerido"),
    price: z.number().min(0, "El precio no puede ser negativo")
});