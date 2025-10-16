import { Request, Response } from "express";
import { CreateGanadoMongo, DeleteGanadoMongo, FindGanadoMongoRepo, UpdateGanadoMongo } from "Ganado/repoMongo/gandoRepoMongo";
import { ICreateGanadoRepo } from "Ganado/repositories/CreateGanado.Repo";
import { IDeleteGanadoRepo } from "Ganado/repositories/DeleteGanado.Repo";
import { IfindGanadoRepo } from "Ganado/repositories/Find.repo";
import { IUpdateGanadoRepo } from "Ganado/repositories/UpdateGanado.Repo";
import { CreateGanadoService, DeleteGanadoService, FindGanadoService, UpdateGanado } from "Ganado/Service/Ganado.Service";
import { Iganado } from "Ganado/types/ganadoType";



const findganadoRepoMongo: IfindGanadoRepo = new FindGanadoMongoRepo()
const findGanadoRepoService = new FindGanadoService(findganadoRepoMongo)
const updateMongoRepo: IUpdateGanadoRepo = new UpdateGanadoMongo()
const updateGanadoService = new UpdateGanado(updateMongoRepo)
const creadetGanadoMogno: ICreateGanadoRepo = new CreateGanadoMongo()
const createService = new CreateGanadoService(creadetGanadoMogno)
const deleteGanadoMongoRepo: IDeleteGanadoRepo = new DeleteGanadoMongo()
const deleteGanadoService = new DeleteGanadoService(deleteGanadoMongoRepo)


export const createGanado = async (req: Request, res: Response) => {
    try {
        const ganado: Iganado = req.body;
        const result = await createService.create(ganado
        )
        if (!result) {
            res.status(304).json({ msg: 'ganado  no created' })
        }
        res.status(201).json({ msg: 'ganado created', result })

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'the internal server erro' })
    }
}

export const findAll = async (req: Request, res: Response) => {
    try {
        const result = await findGanadoRepoService.findAll();
        if (!result) {
            res.status(304).json({ msg: 'ganado not found' })
        }
        res.status(201).json({ msg: 'ganado', result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'the internal server erro' })
    }
}

export const findByID = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await findGanadoRepoService.findByID(id);
        if (!result) {
            res.status(304).json({ msg: 'ganado not found' })
        }
        res.status(201).json({ msg: 'ganado', result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'the internal server erro' })
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const ganado: Iganado = req.body;
        const id = req.params.id
        console.log(id
        )
        const result = await updateGanadoService.update(id, ganado);
        if (!result) {
            res.status(304).json({ msg: 'ganado not found' })
        }
        res.status(201).json({ msg: 'ganado actualizado ', result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'the internal server erro' })
    }
}
export const deleteGanado = async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const result = await deleteGanadoService.Delete(id);

        res.status(200).json({ msg: 'elements', result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'the internal server erro' })
    }
}