import { login } from "auth/controllers/loginController";
import { Router } from "express";

export const authRoutes = Router()


authRoutes.post('/login', login)