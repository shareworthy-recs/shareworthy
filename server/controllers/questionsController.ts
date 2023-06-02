import { Request, Response, NextFunction } from "express";
import Questions from "../models/questionsModel";

const handleError = (err: { message: string; error: string }) => {
  const { message, error } = err;
  return { message: { err: message + error } };
};

const questionsController = {
  //get Feed's reccs
  getFeedQs: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const feedQs = await Questions.findAll();
      res.locals.feedQs = feedQs;
      return next();
    } catch (error) {}
  },
  //api/recommendations/profile?123
  getProfileQs: async (req: Request, res: Response, next: NextFunction) => {
    try {
      //request query -> to give us the user_id we need
      const { id } = req.params;
      const profileQs = await Questions.findAll({
        where: { created_by: id },
      });
      res.locals.profileQs = profileQs;
      return next();
    } catch (error) {
        
    }
  },
  postQuestion: async (req: Request, res: Response, next: NextFunction) => {
    try {
      //save in Questions model
      const { question , category } = req.body;
      const { id } = req.params;
      const postedQuestion = await Questions.create({ question, category, created_by: id });
      res.locals.postedQuestion = postedQuestion;
      return next();
    } catch (error) {

    }
  },
};

export default questionsController;
