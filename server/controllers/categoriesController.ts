import { Request, Response, NextFunction } from "express";
import Categories from "../models/categoriesModel";

const handleError = (err: { message: string; error: string }) => {
  const { message, error } = err;
  return { message: { err: message + error } };
};

const categoriesController = {
  //get Feed's reccs
  getCategories: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categories = await Categories.findAll();
      res.locals.categories = categories;
      return next();
    } catch (error) {}
  },
};

export default categoriesController;
