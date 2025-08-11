# 🚀 Vercel Full-Stack Deployment Guide

## ✅ Yes! Vercel can deploy both Frontend + Backend

Vercel supports full-stack applications with:
- **Frontend**: Static React app
- **Backend**: Serverless API functions
- **Database**: MongoDB Atlas integration
- **File Storage**: Vercel Blob for uploads

## 🏗️ Project Structure for Vercel

```
photography-website/
├── api/                    # Backend API routes (Vercel Functions)
│   ├── blogs/
│   │   ├── index.js       # GET /api/blogs
│   │   └── [id].js        # GET/PUT/DELETE /api/blogs/[id]
│   ├── photos/
│   │   └── index.js       # Photo routes
│   └── contact/
│       └── index.js       # Contact form
├── public/                 # Static files
├── src/                   # React frontend
└── vercel.json            # Vercel configuration
```

## 📝 Step-by-Step Deployment

### Step 1: Restructure for Vercel

**1. Create `vercel.json` in root:**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "src/**/*",
      "use": "@vercel/static-build"
    },
    {
      "src": "api/**/*.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/src/$1"
    }
  ],
  "buildCommand": "cd Frontend && npm run build",
  "outputDirectory": "Frontend/dist",
  "installCommand": "cd Frontend && npm install"
}
```

**2. Move Backend to `api/` folder:**
- Convert Express routes to Vercel serverless functions
- Each route becomes a separate file

### Step 2: Convert Backend Routes

**Example: `api/blogs/index.js`**
```javascript
import { connectDB } from '../lib/mongodb';
import Blog from '../models/Blog';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    try {
      const blogs = await Blog.find().sort({ date: -1 });
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch blogs' });
    }
  }

  if (req.method === 'POST') {
    try {
      const blog = new Blog(req.body);
      await blog.save();
      res.status(201).json(blog);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create blog' });
    }
  }
}
```

**Example: `api/blogs/[id].js`**
```javascript
import { connectDB } from '../lib/mongodb';
import Blog from '../models/Blog';

export default async function handler(req, res) {
  const { id } = req.query;
  await connectDB();

  if (req.method === 'GET') {
    const blog = await Blog.findById(id);
    res.status(200).json(blog);
  }

  if (req.method === 'PUT') {
    const blog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(blog);
  }

  if (req.method === 'DELETE') {
    await Blog.findByIdAndDelete(id);
    res.status(200).json({ message: 'Deleted successfully' });
  }
}
```

**Database connection: `api/lib/mongodb.js`**
```javascript
import mongoose from 'mongoose';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI);
  }
  
  cached.conn = await cached.promise;
  return cached.conn;
}
```

### Step 3: File Upload with Vercel Blob

```javascript
// api/upload.js
import { put } from '@vercel/blob';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { searchParams } = new URL(req.url, 'http://localhost:3000');
    const filename = searchParams.get('filename');
    
    const blob = await put(filename, req.body, {
      access: 'public',
    });

    res.status(200).json(blob);
  } catch (error) {
    res.status(500).json({ error: 'Upload failed' });
  }
}
```

### Step 4: Environment Variables

Add in Vercel Dashboard:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/photography-website
BLOB_READ_WRITE_TOKEN=your_vercel_blob_token
```

### Step 5: Deploy

**Method 1: Vercel CLI**
```bash
npm i -g vercel
vercel --prod
```

**Method 2: GitHub Integration**
1. Push to GitHub
2. Connect repo to Vercel
3. Auto-deploy on push

## 📦 Package.json Updates

**Root `package.json`:**
```json
{
  "name": "photography-website",
  "scripts": {
    "build": "cd Frontend && npm run build",
    "dev": "vercel dev"
  },
  "dependencies": {
    "@vercel/blob": "^0.15.1",
    "mongoose": "^8.0.0"
  }
}
```

## 🔧 Frontend API Calls Update

```javascript
// Instead of http://localhost:5000/api
const API_BASE = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3000/api'
  : '/api';
```

## ✅ Advantages of Vercel

1. **Single Platform** - Frontend + Backend
2. **Serverless** - Auto-scaling
3. **Git Integration** - Auto-deploy
4. **Edge Functions** - Global performance
5. **Built-in Analytics**
6. **Free Tier** - Generous limits

## 🚀 Quick Migration Steps

1. **Restructure project** for Vercel
2. **Convert Express routes** to serverless functions
3. **Setup MongoDB Atlas**
4. **Configure vercel.json**
5. **Deploy with `vercel --prod`**

## 💰 Vercel Pricing

- **Free**: 100GB bandwidth, 6000 serverless function executions
- **Pro**: $20/month for teams
- **Enterprise**: Custom pricing

Perfect for your photography website! 🎨✨
