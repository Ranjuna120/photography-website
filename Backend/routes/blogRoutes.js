const express = require('express');
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  deleteBlog,
  updateBlog,
} = require('../controllers/blogController');

const multer = require('multer');
const path = require('path');
const router = express.Router();

// ✅ Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // ✅ folder to store uploads
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// Routes
router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.post('/', upload.single('media'), createBlog); // ✅ updated for media upload
router.put('/:id', upload.single('media'), updateBlog); // ✅ updated for media upload
router.delete('/:id', deleteBlog);

module.exports = router;
