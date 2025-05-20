import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv  from 'dotenv';
import { connectDB } from './config/db.js';
dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

connectDB().then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
app.listen(PORT, () => console.log(`Server running on ${PORT}`));