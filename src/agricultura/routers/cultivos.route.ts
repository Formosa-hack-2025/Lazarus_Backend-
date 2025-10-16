import { Router } from "express";
import { createCultivo, deleteAllCultivo, findAllCultivo, findByIDCultivo, updateCultivo } from "agricultura/Controllers/cultivos.Controller";
import { validateJWT } from "utils/helpers/validateJWT";
import { validarRol } from "utils/helpers/validateRol";
const cultivosRouter = Router();

cultivosRouter.get("/cultivos", validateJWT, validarRol("Agricultor", "ambos", "admin"), findAllCultivo);
cultivosRouter.get("/cultivos/:id", validateJWT, validarRol("Agricultor", "ambos", "admin"), findByIDCultivo);
cultivosRouter.post("/createCultivos", validateJWT, validarRol("Agricultor", "ambos", "admin"), createCultivo);
cultivosRouter.put("/updateCultivos/:id", validateJWT, validarRol("Agricultor", "ambos", "admin"), updateCultivo)
cultivosRouter.delete("/deleteCultivos/:id", validateJWT, validarRol("Agricultor", "ambos", "admin"), deleteAllCultivo)

export default cultivosRouter;
