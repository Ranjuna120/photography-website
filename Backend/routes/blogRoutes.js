const express = require('express');
const { getAllBlogs, getBlogById, createBlog, deleteBlog, updateBlog  } = require('../controllers/blogController');
const router = express.Router();

router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.post('/', createBlog);
router.delete('/:id', deleteBlog);
router.put('/:id', updateBlog);

module.exports = router;