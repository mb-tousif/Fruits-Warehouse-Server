import express from "express";
import { getBlogs } from "../Controller/blogsController.js";
import {delFruit, getFruit, getFruits, postFruits, updateField} from "../Controller/fruitsController.js";
import { getReviews } from "../Controller/reviewsController.js";
import { getUserByEmail, getUsers, postUser, updateUser } from "../Controller/usersController.js";

const router = express.Router();

// Fruits/Product API
router.get("/fruits", getFruits);
router.post("/fruit", postFruits);
router.get("/fruit/:id", getFruit);
router.put("/fruit/:id", updateField);
router.delete("/fruits/:id", delFruit);

// Blogs API
router.get("/blogs", getBlogs)

// Users API
router.get("/users", getUsers);
router.get("/userByEmail", getUserByEmail);
router.post("/user", postUser);
router.put("/updateUser/:id", updateUser);

// Reviews API
router.get("/reviews", getReviews)

export default router;