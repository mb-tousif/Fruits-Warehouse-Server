import users from "../Model/userSchema.js";

export const getUsers = async (req, res) => {
    try {
        const user = await users.find({});
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
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
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};