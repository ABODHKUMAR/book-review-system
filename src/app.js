import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv  from 'dotenv';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;


app.listen(PORT, () => console.log(`Server running on ${PORT}`));