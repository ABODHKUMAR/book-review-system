import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const protect = async (req, _res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return next({ status: 401, message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (err) {
    next({ status: 401, message: 'Token invalid' });
  }
};
