import users from "../Model/userSchema.js";
import pkg from "jsonwebtoken";
const { Jwt } = pkg;

export const getUsers = async (req, res) => {
    try {
        const user = await users.find({});
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
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
    // try {
    //     const user = req.body;
    //     const result = new users(user);
    //     await result.save()
    //     console.log(result);
    //     res.status(200).json(result)
    // } catch (error) {
    //     res.status(500).json({message: error.message})
    // }
}

export const updateUser = async (req, res) => {
  try {
    const email = req.params.email;
    const user = req.body;
    console.log(user);
    const updatedUser = await users.updateOne(
      { email: email },
      { $set: user },
      { upsert: true }
    );
    const accessToken = Jwt.sign({ email: email }, process.env.JWT_TOKEN, {
      expiresIn: "10d",
    });
    console.log(accessToken);
    res.status(200).json(updatedUser, accessToken);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};