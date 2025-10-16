import { equipoZodSchema } from "./schemas/EquipoZoodSchema";

export function EquipoValidations(data: any) {
    const parsed = equipoZodSchema.safeParse(data)
    if (!parsed.success) {
        console.log(parsed.error)

        throw parsed.error;
    }

    return parsed.data;
}
