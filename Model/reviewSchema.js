import mongoose from "mongoose";

export const reviewSchema = new mongoose.Schema({
  id: String,
  img: String,
  userEmail: String,
  name: String,
  address: String,
  review: String,
});

const review = mongoose.model("review", reviewSchema);

export default review;
