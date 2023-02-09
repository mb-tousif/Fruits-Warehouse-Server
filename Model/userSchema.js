import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  id: String,
  email: { type: String, unique: true },
  role: { type: String, default: "User", enum: ["User", "Admin"] },
  img: String,
  img: String,
});

const users = mongoose.model("user", userSchema)

export default users;