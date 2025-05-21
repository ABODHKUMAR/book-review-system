import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    book:  { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    user:  { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rating:{ type: Number, min: 1, max: 5, required: true },
    text:  { type: String },
  },
  { timestamps: true }
);

// one review per user per book
reviewSchema.index({ book: 1, user: 1 }, { unique: true });

export default mongoose.model('Review', reviewSchema);
