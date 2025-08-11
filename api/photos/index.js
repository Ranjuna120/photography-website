import { connectDB } from '../lib/mongodb';

const PhotoSchema = {
  title: String,
  category: String,
  imageUrl: String,
  description: String,
  date: { type: Date, default: Date.now }
};

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    await connectDB();
    const mongoose = require('mongoose');
    
    const Photo = mongoose.models.Photo || mongoose.model('Photo', new mongoose.Schema(PhotoSchema));

    if (req.method === 'GET') {
      const photos = await Photo.find().sort({ date: -1 });
      res.status(200).json(photos);
    } else if (req.method === 'POST') {
      const photo = new Photo(req.body);
      await photo.save();
      res.status(201).json(photo);
    } else if (req.method === 'DELETE') {
      const { id } = req.query;
      await Photo.findByIdAndDelete(id);
      res.status(200).json({ message: 'Photo deleted successfully' });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Server error: ' + error.message });
  }
}
