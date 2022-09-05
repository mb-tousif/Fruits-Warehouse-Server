import express from "express";
import {getFruit, getFruits} from "../Controller/fruitsController.js";

const router = express.Router();

router.get("/fruits", getFruits);
router.get("/fruit/:id", getFruit);


export default router;