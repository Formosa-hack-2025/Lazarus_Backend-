import { Router } from "express";
import { findAll } from "agricultura/Controllers/cultivos.Controller";
import { findByID } from "agricultura/Controllers/cultivos.Controller";
import { validateJWT } from "utils/helpers/validateJWT";
import { validarRol } from "utils/helpers/validateRol";
const cultivosRouter = Router();

cultivosRouter.get("/cultivos", validateJWT, validarRol("Agricultor"), findAll);
cultivosRouter.get("/cultivo/:id", findByID);
export default cultivosRouter;
