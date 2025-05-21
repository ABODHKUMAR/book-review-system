import Book from '../models/book.model.js';
import Review from '../models/review.model.js';

export const createBook = async (req, res, next) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    next(err);
  }
};

export const listBooks = async (req, res, next) => {
  try {
    const { author, genre } = req.query;
    const q = {};
    if (author) q.author = new RegExp(author, 'i');
    if (genre)  q.genre  = new RegExp(genre,  'i');

    const { skip, limit } = req.pagination;
    const books = await Book.find(q).skip(skip).limit(limit);
    res.json(books);
  } catch (err) {
    next(err);
  }
};

export const getBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return next({ status: 404, message: 'Book not found' });

    const { skip, limit } = req.pagination;
    const reviews = await Review.find({ book: book._id })
                                .populate('user', 'username')
                                .skip(skip)
                                .limit(limit);
    res.json({
      ...book.toObject(),
      averageRating: await book.averageRating,
      reviews,
    });
  } catch (err) {
    next(err);
  }
};

export const searchBooks = async (req, res, next) => {
  try {
    const { q } = req.query;
    if (!q) return res.json([]);
    const regex = new RegExp(q, 'i');
    const books = await Book.find({ $or: [{ title: regex }, { author: regex }] })
                            .limit(20);
    res.json(books);
  } catch (err) {
    next(err);
  }
};

export const addReview = async (req, res, next) => {
  try {
    const review = await Review.create({
      ...req.body,
      book: req.params.id,
      user: req.user._id,
    });
    res.status(201).json(review);
  } catch (err) {         
    if (err.code === 11000)
      return next({ status: 400, message: 'One review per user per book' });
    next(err);
  }
};
