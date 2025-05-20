import { Router } from 'express';
import {
  createBook,
  listBooks,
  searchBooks,
} from '../controllers/book.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
import { paginate } from '../middlewares/paginate.middleware.js';

const r = Router();
r.get('/search', searchBooks);

r.route('/')
  .get(paginate(), listBooks)
  .post(protect, createBook);

export default r;
