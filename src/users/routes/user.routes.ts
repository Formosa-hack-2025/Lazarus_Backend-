import { Router } from "express";
import { validateJWT } from "Middlewares/helpers-jaqueline/validateJWT";
import { validarRol } from "Middlewares/helpers-jaqueline/validateRol";

import { createUser } from "users/controllers/createUser.controllers";
import { deleteUserControllers } from "users/controllers/DeleteUser.Controller";
import { getAllUser, getUserByID } from "users/controllers/FindUser.Controller";
import { RegisterAmdmins } from "users/controllers/Register.Controller";
import { updateUserController } from "users/controllers/updateUser.Controller";



export const userRoutes = Router()


userRoutes.post("/register", RegisterAmdmins)
userRoutes.post("/createUSer", validateJWT, validarRol("admin"), createUser);
userRoutes.put("/updateUSer/:id", validateJWT, validarRol("admin"), updateUserController)
userRoutes.delete("/deleteUser/:id", validateJWT, validarRol("admin"), deleteUserControllers)
userRoutes.get("/allUSer", validateJWT, validarRol("admin"), getAllUser)
userRoutes.get("/users/:id", validateJWT, validarRol("admin"), getUserByID) 
