import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './database/db';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
connectDB();