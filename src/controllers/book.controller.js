import Book from '../models/book.model.js';

export const createBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json(book);
};
