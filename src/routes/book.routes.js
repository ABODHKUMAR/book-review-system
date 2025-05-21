import { Router } from 'express';
import {
  createBook,
  listBooks,
  getBook,
  searchBooks,
} from '../controllers/book.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
import { paginate } from '../middlewares/paginate.middleware.js';

const r = Router();
r.get('/search', searchBooks);
r.route('/')
  .get(paginate(), listBooks)
  .post(protect, createBook);

r.route('/:id')
  .get(paginate(), getBook);
export default r;
