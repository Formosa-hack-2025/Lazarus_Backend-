import { Router } from "express";
import { createCultivo, findAllCultivo, findByIDCultivo } from "agricultura/Controllers/cultivos.Controller";
import { validateJWT } from "utils/helpers/validateJWT";
import { validarRol } from "utils/helpers/validateRol";
const cultivosRouter = Router();

cultivosRouter.get("/cultivos", validateJWT, validarRol("Agricultor", "ambos", "admin"), findAllCultivo);
cultivosRouter.get("/cultivos/:id", validateJWT, validarRol("Agricultor", "ambos", "admin"), findByIDCultivo);
cultivosRouter.post("/cultivos", validateJWT, validarRol("Agricultor", "ambos", "admin"), createCultivo);
export default cultivosRouter;
