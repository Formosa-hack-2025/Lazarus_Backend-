import { Router } from "express";
import { createGanado, deleteGanado, findAll, findByID, update } from "Ganado/Controllers/Ganado.Controller";
import { validateJWT } from "utils/helpers/validateJWT";
import { validarRol } from "utils/helpers/validateRol";





export const ganadoRoutes = Router();


ganadoRoutes.get("/ganado", validateJWT, validarRol("Ganadero"), findAll)
ganadoRoutes.get("/ganado/:id", validateJWT, validarRol("Ganadero"), findByID)
ganadoRoutes.post("/createGanado", validateJWT, validarRol("Ganadero"), createGanado);
ganadoRoutes.put("/updateGanado/:id", validateJWT, validarRol("Ganadero"), update)
ganadoRoutes.delete("/delete/:id", validateJWT, validarRol("Ganadero"), deleteGanado)