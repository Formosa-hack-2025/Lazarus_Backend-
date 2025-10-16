import { Router } from "express";
import { validateJWT } from "Middlewares/helpers/validateJWT";
import { validarRol } from "Middlewares/helpers/validateRol";
import { createUser } from "users/controllers/createUser.controllers";
import { deleteUserControllers } from "users/controllers/DeleteUser.Controller";
import { getAllUser, getUserByID } from "users/controllers/FindUser.Controller";
import { RegisterAmdmins } from "users/controllers/Register.Controller";
import { updateUserController } from "users/controllers/updateUser.Controller";



export const userRoutes = Router()


userRoutes.post("/register", RegisterAmdmins)
userRoutes.post("/createUSer", validateJWT, createUser);
userRoutes.put("/updateUSer/:id", validateJWT, updateUserController)
userRoutes.delete("/deleteUser/:id", validateJWT, deleteUserControllers)
userRoutes.get("/allUSer", validateJWT, getAllUser)
userRoutes.get("/users/:id", validateJWT, getUserByID) 
