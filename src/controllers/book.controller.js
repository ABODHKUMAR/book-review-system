import Book from '../models/book.model.js';

export const createBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json(book);
};

export const listBooks = async (req, res) => {
  const { author, genre } = req.query;
  const q = {};
  if (author) q.author = new RegExp(author, 'i');
  if (genre)  q.genre  = new RegExp(genre,  'i');

  const { skip, limit } = req.pagination;
  const books = await Book.find(q).skip(skip).limit(limit);
  res.json(books);
};

export const searchBooks = async (req, res) => {
  const { q } = req.query;
  if (!q) return res.json([]);
  const regex = new RegExp(q, 'i');
  const books = await Book.find({ $or: [{ title: regex }, { author: regex }] })
                          .limit(20);
  res.json(books);
};
