const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  mediaUrl: { type: String },  // ✅ URL to uploaded file (image/video)
  mediaType: { type: String }, // ✅ 'image' | 'video'
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Blog', BlogSchema);
