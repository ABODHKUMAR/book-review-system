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
