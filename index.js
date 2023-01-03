import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import bodyParser from "body-parser";
import dbConnection from "./connectDB/DB.js";
import Routes from "./Router/Route.js";
const app = express();
const port = process.env.PORT || 4000;

dotenv.config();
const corsConfig = {
  origin: true,
  Credential: true,
};

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

dbConnection();

app.use("/api", Routes);

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center; padding: 20px; color:#753a88'><span style='color: green'>🛢 </span>Server is successfully running 🚀</h1>"
  );
});

app.all("*", (req, res) => {
  res.send(
    "<h1 style='text-align: center; padding: 20px; color:red; margin-top: 4rem'><span style='color: green'>🛢 </span> Requested Route Not Found 🚀</h1>"
  );
});

app.listen(port, (req, res) => {
  console.log(`Server running on PORT: ${port}`.america.bold);
});