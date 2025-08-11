import { connectDB } from '../lib/mongodb';

// Blog model for serverless environment
const BlogSchema = {
  title: String,
  content: String,
  date: { type: Date, default: Date.now },
  mediaUrl: String,
  mediaType: String
};

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
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
      const blogs = await Blog.find().sort({ date: -1 });
      res.status(200).json(blogs);
    } else if (req.method === 'POST') {
      const blog = new Blog(req.body);
      await blog.save();
      res.status(201).json(blog);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Server error: ' + error.message });
  }
}
