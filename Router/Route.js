import express from "express";
import {getFruit, getFruits, updateField} from "../Controller/fruitsController.js";

const router = express.Router();

router.get("/fruits", getFruits);
router.get("/fruit/:id", getFruit);
router.put("/fruit/:id", updateField);


export default router;