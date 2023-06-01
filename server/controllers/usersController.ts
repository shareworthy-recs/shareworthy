import { Request, Response, NextFunction } from "express";
import Users from '../models/usersModel';

const handleError = (err: {message: string, error: string}) => {
  const { message, error} = err;
  return {message: {err: message+error}};
}

const usersController = {
    //sign up middleware
    signUp: async (req: Request, res: Response, next: NextFunction) => {
      //req.username, req.password
      const { full_name, email, username, password } = req.body;
      //save username, hashed password in database UserModel
      try {
        const newUser = await Users.create({ full_name, email, username, password });
        console.log('new user created!: ', username);
        return next();
      } catch (error) {
          if(error instanceof Error){
          return next(handleError({
            message: 'Error occurred at usersController...',
            error: error.message
          }))
          }
      }
    },
    login: async (req: Request, res: Response, next: NextFunction) => {
      try {
      const {username, password} = req.body;
      //check if username and password are null
      //if null, throw error for null user/pass
      if(!username || !password) {
        throw new Error('Username and password must be provided.');
      }
      //find matching username and password in database
      const verifiedUser = await Users.findOne({where: { username: username as string, password: password as string }});
      //if null, throw error for invalid user/pass
      if(verifiedUser === null) throw new Error('Username/password is invalid.');
      //store verifieduser in res.locals
      res.locals.message = verifiedUser;
      return next();
      } catch (error) {
        if(error instanceof Error){
          return next(handleError({
            message: 'Error occurred at usersController...',
            error: error.message
          }))
        }
      }
    }
};


export default usersController;