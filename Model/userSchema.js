import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  id: String,
  email: String,
  role: { type: String, default: "user" },
  img: String,
});

const users = mongoose.model("user", userSchema)

export default users;