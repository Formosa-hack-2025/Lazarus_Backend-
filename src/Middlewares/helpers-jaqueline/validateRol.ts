import { Request, Response, NextFunction } from 'express';

// Extiende la interfaz Request para incluir 'user'
declare global {
    namespace Express {
        interface Request {
            user?: {
                rol: string;
                [key: string]: any;
            }
            id: any
        }
    }
}


export const validarRol = (rolRequerido: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        // Verificamos que req.user exista (que validateJWT se ejecutó)
        console.log(req.user)
        if (!req.user) {
            return res.status(401).json({ error: 'No autenticado' });
        }

        // Verificamos el rol
        if (req.user.rol !== rolRequerido) {
            return res.status(403).json({ error: 'No tienes permisos' });
        }

        next();
    };
};