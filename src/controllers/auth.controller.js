import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

export const signup = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ token: signToken(user._id) });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next({ status: 400, message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return next({ status: 401, message: 'Bad credentials' });
    }

    res.json({ token: signToken(user._id) });
  } catch (err) {
    next(err);
  }
};
