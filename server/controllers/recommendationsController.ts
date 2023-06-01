import { Request, Response, NextFunction } from "express";
import Reccs from "../models/recommendationsModel";

const handleError = (err: { message: string; error: string }) => {
  const { message, error } = err;
  return { message: { err: message + error } };
};

const reccsController = {



}

export default reccsController;