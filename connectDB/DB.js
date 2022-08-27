import mongoose from "mongoose";

const dbConnection = async (req, res) => {
  const url = `mongodb+srv://${process.env.MONGODB_USER_NAME}:${process.env.MONGODB_USER_PASSWORD}@freshfruits.lffzug2.mongodb.net/freshFruits`;

  try {
    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DB connected");
  } catch (error) {
    console.log("Error while connecting with DB", error.message);
  }
};

export default dbConnection;
