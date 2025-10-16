import { repoMongo } from "Crud_basic/repoMongo/basis_mongo_repo";
import { CultivoService } from "agricultura/Service/cultivos.Service";
import { ICultivo } from "agricultura/types/ICultivos";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { id } from "zod/v4/locales";

const RepoMongo = new repoMongo();
const RepoService = new CultivoService(RepoMongo);

export const createCultivo = async (req: Request, res: Response) => {
  try {
    const element: ICultivo = req.body;
    const idUser = req.user?.id;

    const result = await RepoService.create(element, idUser);

    if (!result) {
      res.status(304).json({ msg: "element no created" });
    }

    res.status(201).json({ msg: "element created", result });
  } catch (error) {
    console.log(error);

    res.status(500).json({ msg: "the internal server erro" });
  }
};
export const findAllCultivo = async (req: Request, res: Response) => {
  try {
    const id = req.user?.id;
    const idValid = new mongoose.Types.ObjectId(id as string);
    const result = await RepoService.findAll(idValid);
    if (!result) {
      res.status(304).json({ msg: "element not found" });
    }
    res.status(201).json({ msg: "elements", result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "the internal server erro" });
  }
};
export const findByIDCultivo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await RepoService.findByID(id);
    if (!result) {
      res.status(304).json({ msg: "element not found" });
    }
    res.status(201).json({ msg: "elements", result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "the internal server erro" });
  }
};
export const updateCultivo = async (req: Request, res: Response) => {
  try {
    const element: ICultivo = req.body;
    const id = req.params.id;

    const result = await RepoService.update(element, id);
    if (!result) {
      res.status(304).json({ msg: "element not found" });
    }
    res.status(201).json({ msg: "elements", result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "the internal server erro" });
  }
};
export const deleteAllCultivo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await RepoService.Delete(id);

    res.status(200).json({ msg: "elements", result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "the internal server erro" });
  }
};
