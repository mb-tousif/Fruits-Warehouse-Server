import freshFruit from "../Model/fruitSchema.js"

export const getFruits = async (req, res) => {
  try {
    const fruits = await freshFruit.find({});
    res.status(200).json(fruits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFruit = async (req, res) => {
  try {
    const id = req.params.id
    const fruit = await freshFruit.findOne({_id : id});
    res.status(200).json(fruit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};