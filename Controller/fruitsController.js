import freshFruit from "../Model/fruitSchema.js"

// Get All Fruits API
export const getFruits = async (req, res) => {
  try {
    const {limit, page} = req.query
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    const fruits = await freshFruit.find().skip(+page*limit).limit(+limit);
    res.status(200).json(fruits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Fruits API
export const postFruits = async (req, res) => {
  try {
    const fruit = req.body
    const result = await freshFruit.create(fruit)
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Single Fruit API 
export const getFruit = async (req, res) => {
  try {
    const id = req.params.id
    // console.log(id);
    const fruit = await freshFruit.findOne({_id : id});
    res.status(200).json(fruit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Single Fruit Data API
export const updateField = async (req, res)=>{
  try {
    const id = req.params.id;
    const quantity = req.body;
    console.log(quantity);
    const updatedFruit = await freshFruit.updateOne(
      {_id: id},
      {$set: quantity}
      )
    res.status(200).json(updatedFruit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete API
export const delFruit = async (req, res) => {
  try {
    const id = req.params.id;
    const fruit = await freshFruit.deleteOne({ _id: id });
    res.status(200).json(fruit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};