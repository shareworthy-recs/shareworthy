import { Request, Response, NextFunction } from "express";
import Users from '../models/usersModel';

const usersController = {
    //sign up middleware
    signUp: async (req: Request, res: Response, next: NextFunction) => {
      //req.username, req.password
      const { full_name, email, username, password } = req.body;
      //save username, hashed password in database UserModel
      try {
        const newUser = Users.create({ full_name, email, username, password });
        console.log('new user created!: ', username);
      } catch (error) {

      }
      return next();
    }
};


export default usersController;