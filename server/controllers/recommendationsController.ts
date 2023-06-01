import { Request, Response, NextFunction } from "express";
import Reccs from "../models/recommendationsModel";


const handleError = (err: { message: string; error: string }) => {
  const { message, error } = err;
  return { message: { err: message + error } };
};

const reccsController = {
  //get Feed's reccs
  getFeed: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const feedReccs = await Reccs.findAll();
      res.locals.reccs = feedReccs;
    } catch (error) {

    }
  },
  getProfile: async (req: Request, res: Response, next: NextFunction) => {
    try {
      //request query -> to give us the user_id we need
      const { user_id } = req.query
      const profileReccs = await Reccs.findAll({where: {created_by: user_id}});
      res.locals.reccs = profileReccs;
    } catch (error) {

    }
  },
  getSaved: async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (error) {

    }
  },
};

export default reccsController;
