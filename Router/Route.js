import express from "express";
import {getFruits} from "../Controller/getFruits.js";

const router = express.Router();

router.get("/fruits", getFruits);


export default router;