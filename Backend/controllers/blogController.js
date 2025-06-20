// const Blog = require('../models/Blog');

// // @desc Get all blogs
// const getAllBlogs = async (req, res) => {
//   try {
//     const blogs = await Blog.find().sort({ date: -1 });
//     res.json(blogs);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // @desc Get single blog by ID
// const getBlogById = async (req, res) => {
//   try {
//     const blog = await Blog.findById(req.params.id);
//     if (!blog) return res.status(404).json({ message: 'Blog not found' });
//     res.json(blog);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // @desc Create a new blog
// const createBlog = async (req, res) => {
//   try {
//     const { title, content } = req.body;
//     const newBlog = new Blog({ title, content });
//     await newBlog.save();
//     res.status(201).json(newBlog);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// module.exports = {
//   getAllBlogs,
//   getBlogById,
//   createBlog,
// };
