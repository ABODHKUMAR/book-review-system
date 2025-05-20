import { Router } from 'express';
import {
  createBook,
} from '../controllers/book.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

const r = Router();
r.route('/')
  .post(protect, createBook);

export default r;
