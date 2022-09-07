import users from "../Model/userSchema.js";

export const getUsers = async (req, res) => {
    try {
        const user = await users.find({});
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}