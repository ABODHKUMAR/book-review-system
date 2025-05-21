// src/routes/review.routes.js
import { Router } from 'express';
import {
  
  updateReview,
  deleteReview,
} from '../controllers/review.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

const r = Router({ mergeParams: true });
r.put( '/reviews/:id', protect, updateReview);
r.delete('/reviews/:id', protect, deleteReview);
export default r;
