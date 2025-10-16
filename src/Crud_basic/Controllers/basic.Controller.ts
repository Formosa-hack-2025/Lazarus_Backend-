// import { repoMongo } from "Crud_basic/repoMongo/basis_mongo_repo";
// import { IBasicRepo } from "Crud_basic/repositories/basic.repo";
// import { BasicService } from "Crud_basic/Service/basic.Service";
// import { elemento } from "Crud_basic/types/basic_crud";
// import { Request, Response } from "express";

// // const basicRepoMongo: IBasicRepo = new repoMongo()
// const basicRepoService = new BasicService(basicRepoMongo);

// export const createBasic = async (req: Request, res: Response) => {
//   try {
//     const element: elemento = req.body;
//     const result = await basicRepoService.create(element);
//     if (!result) {
//       res.status(304).json({ msg: "element no created" });
//     }
//     res.status(201).json({ msg: "element created", result });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "the internal server erro" });
//   }
// };

// export const findAll = async (req: Request, res: Response) => {
//   try {
//     const result = await basicRepoService.findAll();
//     if (!result) {
//       res.status(304).json({ msg: "element not found" });
//     }
//     res.status(201).json({ msg: "elements", result });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "the internal server erro" });
//   }
// };

// export const findByID = async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id;
//     const result = await basicRepoService.findByID(id);
//     if (!result) {
//       res.status(304).json({ msg: "element not found" });
//     }
//     res.status(201).json({ msg: "elements", result });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "the internal server erro" });
//   }
// };

// export const update = async (req: Request, res: Response) => {
//   try {
//     const element: elemento = req.body;
//     const id = req.params.id;

//     const result = await basicRepoService.update(element, id);
//     if (!result) {
//       res.status(304).json({ msg: "element not found" });
//     }
//     res.status(201).json({ msg: "elements", result });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "the internal server erro" });
//   }
// };
// export const deleteAll = async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id;

//     const result = await basicRepoService.Delete(id);

//     res.status(200).json({ msg: "elements", result });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "the internal server erro" });
//   }
// };
