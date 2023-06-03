import { Request, Response, NextFunction } from "express";
import Reccs from "../models/recommendationsModel";


const handleError = (err: { message: string; error: string }) => {
  const { message, error } = err;
  return { message: { err: message + error } };
};


const reccsController = {
  //get Feed's reccs
  getFeedReccs: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const feedReccs = await Reccs.findAll();
      res.locals.feedReccs = feedReccs;
      return next();
    } catch (error) {}
  },
  //api/recommendations/123
  getProfileReccs: async (req: Request, res: Response, next: NextFunction) => {
    try {
      //request params -> to give us the user_id we need
      const { id } = req.params;
      const profileReccs = await Reccs.findAll({ where: { created_by: id } });
      res.locals.profileReccs = profileReccs;
      return next();
    } catch (error) {}
  },
  postRecc: async (req: Request, res: Response, next: NextFunction) => {
    try {
      //save in reccs model
      const { question_id, title, location, description, category } = req.body;
      console.log('body', req.body)
      const { id } = req.params;
      console.log('id: ', id);
      const postedRecc = await Reccs.create({
        question_id,
        title,
        location,
        description,
        category,
        created_by: id,
      });
      console.log('posted: ', postedRecc)
      res.locals.postedRecc = postedRecc;
      return next();
    } catch (error) {}
  },
};

export default reccsController;
