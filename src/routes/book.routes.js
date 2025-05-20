import { Router } from 'express';
import {
  createBook,
  listBooks
} from '../controllers/book.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
import { paginate } from '../middlewares/paginate.middleware.js';

const r = Router();

r.route('/')
  .get(paginate(), listBooks)
  .post(protect, createBook);

export default r;
