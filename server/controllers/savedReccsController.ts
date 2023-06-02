import { Request, Response, NextFunction } from "express";
import SavedReccs from "../models/savedReccsModel";

const handleError = (err: { message: string; error: string }) => {
  const { message, error } = err;
  return { message: { err: message + error } };
};

const savedReccsController = {
  getSavedReccs: async (req: Request, res: Response, next: NextFunction) => {
    try {
        //request query -> to give us the user_id we need
        const { id } = req.params;
        const savedReccs = await SavedReccs.findAll({
          where: { saved_by: id },
        });
        res.locals.savedReccs = savedReccs;
        return next();
      } catch (error) {
          
      }
  },
};

export default savedReccsController;
