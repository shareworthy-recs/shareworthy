import express from "express";
import { Request, Response, NextFunction } from "express";
const router = express.Router();

import reccsController from "../controllers/recommendationsController";
import questionsController from "../controllers/questionsController";

//getProfile
//get user's questions
//get user's reccs
//get user's saved reccs
router.get(
  "/",
  questionsController.getFeedQs,
  reccsController.getFeedReccs,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals);
  }
);

export default router;
