import { Router } from "express";
import { createGanado, deleteGanado, findAll, findByID, update } from "Ganado/Controllers/Ganado.Controller";
import { validateJWT } from "utils/helpers/validateJWT";
import { validarRol } from "utils/helpers/validateRol";





export const ganadoRoutes = Router();


ganadoRoutes.get("/ganado", validateJWT, validarRol("Ganadero", "admin", "Mixto"), findAll)
ganadoRoutes.get("/ganado/:id", validateJWT, validarRol("Ganadero", "admin", "Mixto"), findByID)
ganadoRoutes.post("/createGanado", createGanado);
ganadoRoutes.put("/updateGanado/:id", validateJWT, validarRol("Ganadero", "admin", "Mixto"), update)
ganadoRoutes.delete("/delete/:id", validateJWT, validarRol("Ganadero", "admin", "Mixto"), deleteGanado)