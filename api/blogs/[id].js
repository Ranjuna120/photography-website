import { connectDB } from '../lib/mongodb';

const BlogSchema = {
  title: String,
  content: String,
  date: { type: Date, default: Date.now },
  mediaUrl: String,
  mediaType: String
};

export default async function handler(req, res) {
  const { id } = req.query;

  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    await connectDB();
    const mongoose = require('mongoose');
    
    const Blog = mongoose.models.Blog || mongoose.model('Blog', new mongoose.Schema(BlogSchema));

    if (req.method === 'GET') {
      const blog = await Blog.findById(id);
      if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
      res.status(200).json(blog);
    } else if (req.method === 'PUT') {
      const blog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
      if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
      res.status(200).json(blog);
    } else if (req.method === 'DELETE') {
      const blog = await Blog.findByIdAndDelete(id);
      if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
      res.status(200).json({ message: 'Blog deleted successfully' });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Server error: ' + error.message });
  }
}
