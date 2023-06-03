import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { NextFunction, Response, Request } from 'express';
import cors from 'cors';
import { connectDB } from './config/db';
import session from 'express-session';
import passport from 'passport';
import {
  initializeGoogleStrategy,
  initializeUserSerialization,
} from './passport';
import authRoutes from './routes/authRoutes';

console.log('google--->', process.env.GOOGLE_CLIENT_ID);
import userRouter from './routes/usersRouter';
import reccsRouter from './routes/reccsRouter';
import questionsRouter from './routes/questionsRouter';
import profileRouter from './routes/profileRouter';
import homePageRouter from './routes/homePageRouter';
import categoriesRouter from './routes/categoriesRouter';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();

app.use(
  session({
    secret: 'shareworthySession',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
initializeGoogleStrategy();
initializeUserSerialization();

app.use('/', express.static(path.resolve(__dirname, '../client')));

// OAuth

// app.use(
//   cors({
//     origin: 'http://localhost:8080',
//     methods: 'GET, POST, PUT, DELETE',
//     credentials: true,
//   })
// );

app.use('/auth', authRoutes);
//user route
app.use('/api/user', userRouter);
//recommendations route
app.use('/api/recommendations', reccsRouter);
//questions route
app.use('/api/questions', questionsRouter);
//saved recommendations route
app.use('/api/categories', categoriesRouter);

//profile
app.use('/api/profile', profileRouter);

//homepage
app.use('/api/homepage', homePageRouter);

// catch-all route handler for any requests to an unknown route
// sends them to index, let's react router handle it client side
app.use((req: Request, res: Response) =>
  // res.status(404).send('Page not found, please check your URL endpoints!')
  res.status(404).sendFile(path.join(__dirname, '../build/index.html'))
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
