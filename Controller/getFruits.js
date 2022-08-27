import freshFruit from "../Model/fruitSchema.js"

export const getFruits = async (req, res) => {
  try {
    const fruits = await freshFruit.find({});
    res.status(200).json(fruits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};