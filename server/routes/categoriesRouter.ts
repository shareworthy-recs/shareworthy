import express from "express";
import { Request, Response, NextFunction } from "express";
import categoriesController from "../controllers/categoriesController";

const router = express.Router();

router.get(
  "/",
  categoriesController.getCategories,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals.categories);
  }
);

export default router;