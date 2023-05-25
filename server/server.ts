import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { NextFunction, Response, Request } from 'express';
import cors from 'cors';
import { connectDB } from './config/db';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.resolve(__dirname, '../client')));
app.use(cors());
// catch-all route handler for any requests to an unknown route
app.use((req: Request, res: Response) =>
  res.status(404).send('Page not found, please check your URL endpoints!')
);

//express error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: err },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
connectDB();