import mongoose from "mongoose";

export const fruitSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  description: String,
  quantity: Number,
  sold: Number,
  img: String,
  supplier: String,
  userEmail: String,
});

const freshFruit = mongoose.model("fruit", fruitSchema);

export default freshFruit;