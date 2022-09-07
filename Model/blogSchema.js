import mongoose from "mongoose";

export const blogSchema = new mongoose.Schema({
  id: String,
  question: String,
  answer: String,
});

const blog = mongoose.model("blog", blogSchema);

export default blog;