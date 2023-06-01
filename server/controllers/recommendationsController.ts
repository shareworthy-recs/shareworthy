import { Request, Response, NextFunction } from "express";
import Reccs from "../models/recommendationsModel";

const handleError = (err: { message: string; error: string }) => {
  const { message, error } = err;
  return { message: { err: message + error } };
};

const reccsController = {
  //get Feed's reccs
  getFeed: (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {}
  },
  getProfile: (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {}
  },
  getSaved: (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {}
  },
};

export default reccsController;
