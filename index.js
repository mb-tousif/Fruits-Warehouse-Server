import express from "express";
import cors from "cors";
import dotenv from "dotenv";
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

app.get("/vercel", (req, res)=>{
  res.send("Vercel is easy to use!")
})

app.listen(port, (req, res) => {
  console.log("Welcome to server");
});