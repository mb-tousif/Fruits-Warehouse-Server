import express from "express";
import { getBlogs } from "../Controller/blogsController.js";
import {getFruit, getFruits, updateField} from "../Controller/fruitsController.js";
import { getUsers } from "../Controller/usersController.js";

const router = express.Router();

// Fruits/Product API
router.get("/fruits", getFruits);
router.get("/fruit/:id", getFruit);
router.put("/fruit/:id", updateField);

// Blogs API
router.get("/blogs", getBlogs)

// Users API
router.get("/users", getUsers)

export default router;