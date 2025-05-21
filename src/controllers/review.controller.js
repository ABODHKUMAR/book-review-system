import Review from '../models/review.model.js';

export const updateReview = async (req, res, next) => {
  const review = await Review.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    req.body,
    { new: true }
  );
  if (!review) return next({ status: 404, message: 'Review not found' });
  res.json(review);
};

export const deleteReview = async (req, res, next) => {
  const review = await Review.findOneAndDelete({
    _id: req.params.id,
    user: req.user._id,
  });
  if (!review) return next({ status: 404, message: 'Review not found' });
  res.status(204).end();
};

