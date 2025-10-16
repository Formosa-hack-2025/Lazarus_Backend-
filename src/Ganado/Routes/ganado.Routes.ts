import { Router } from "express";
import { createGanado, deleteGanado, findAll, findByID, update } from "Ganado/Controllers/Ganado.Controller";





export const ganadoRoutes = Router();


ganadoRoutes.get("/ganado", findAll)
ganadoRoutes.get("/ganado/:id", findByID)
ganadoRoutes.post("/createGanado", createGanado);
ganadoRoutes.put("/updateGanado/:id", update)
ganadoRoutes.delete("/delete/:id", deleteGanado)