import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title:   { type: String, required: true, trim: true },
    author:  { type: String, required: true, trim: true },
    genre:   { type: String, required: true, trim: true },
    summary: { type: String },
  },
  { timestamps: true }
);

// virtual averageRating (computed on the fly via aggregation)
bookSchema.virtual('averageRating').get(async function () {
  const obj = await this.model('Review').aggregate([
    { $match: { book: this._id } },
    { $group: { _id: null, avg: { $avg: '$rating' } } },
  ]);
  return obj[0]?.avg ?? 0;
});

export default mongoose.model('Book', bookSchema);
