import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv  from 'dotenv';
import { connectDB } from './config/db.js';
import  authRoutes   from './routes/auth.routes.js';
import  bookRoutes   from './routes/book.routes.js';
dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api', authRoutes);
app.use('/api/books', bookRoutes);


const PORT = process.env.PORT || 8080;

connectDB().then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
app.listen(PORT, () => console.log(`Server running on ${PORT}`));