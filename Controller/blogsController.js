import blog from "../Model/blogSchema.js";

export const getBlogs = async (req, res) => {
  try {
    const blogs = await blog.find({});
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};