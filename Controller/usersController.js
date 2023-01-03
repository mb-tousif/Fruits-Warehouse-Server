import users from "../Model/userSchema.js";
import pkg from "jsonwebtoken";
const { Jwt } = pkg;
import dotenv from "dotenv";

dotenv.config();

export const getUsers = async (req, res) => {
    try {
        const user = await users.find({});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const postUser = async (req, res) => {
    try {
      const exist = await users.findOne({ email: req.body.email });

      if (exist) {
        return res.status(401).json({
          message: "Username already exists",
        });
      }

      const user = req.body;
      const newUser = new users(user);
      await newUser.save();

      res.status(200).json({
        message: user,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
}

export const getUserByEmail = async ( req, res ) => {
  try {
    const user = await users.findOne({ email: req.body.email });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.body;
    // console.log(user);
    const updatedUser = await users.updateOne(
      { _id: id },
      { $set: user },
      { upsert: true }
    );
    // const accessToken = Jwt.Sign({ email: email }, process.env.JWT_TOKEN, {
    //   expiresIn: "10d",
    // });
    // console.log(accessToken);
    // res.status(200).json(updatedUser, accessToken);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};