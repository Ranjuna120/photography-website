# 🚀 Photography Website Deployment Guide

## Option 1: Frontend (Netlify) + Backend (Separate)

### Step 1: Prepare Frontend for Production

1. **Build the React app:**
```bash
cd Frontend
npm run build
```

2. **Create `_redirects` file in `Frontend/public/`:**
```
/*    /index.html   200
```

3. **Update API URLs in your React app:**
- Change `http://localhost:5000` to your production backend URL
- Create environment variables for different environments

### Step 2: Deploy to Netlify

**Method 1: Drag & Drop**
1. Go to [netlify.com](https://netlify.com)
2. Drag the `Frontend/dist` folder to Netlify
3. Your site will be live!

**Method 2: Git Integration**
1. Push your code to GitHub
2. Connect Netlify to your GitHub repo
3. Set build settings:
   - **Build command:** `cd Frontend && npm run build`
   - **Publish directory:** `Frontend/dist`

### Step 3: Deploy Backend

**Railway (Recommended):**
1. Go to [railway.app](https://railway.app)
2. Connect GitHub repo
3. Select Backend folder
4. Add environment variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_atlas_connection_string
   ```

**Heroku:**
1. Create `Procfile` in Backend folder:
   ```
   web: node server.js
   ```
2. Deploy via Heroku CLI or GitHub integration

### Step 4: Database Setup
1. Create MongoDB Atlas account
2. Create cluster and database
3. Get connection string
4. Add to backend environment variables

### Step 5: Update Frontend API URLs
```javascript
// Create config file
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-url.railway.app/api'
  : 'http://localhost:5000/api';
```

## Option 2: Full-Stack on Single Platform

### Vercel (Better for Full-Stack)
1. Deploy both frontend and backend
2. Use Vercel serverless functions for API

### Railway (Full-Stack)
1. Deploy entire project
2. Configure build settings for monorepo

## 🔧 Environment Variables Needed

### Frontend (.env.production)
```
VITE_API_URL=https://your-backend-url.com/api
```

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/photography-website
NODE_ENV=production
```

## 📝 Pre-Deployment Checklist

- [ ] Build command works locally
- [ ] Environment variables configured
- [ ] Database connection string updated
- [ ] API URLs updated for production
- [ ] File upload paths configured
- [ ] CORS settings updated for production domain
- [ ] MongoDB Atlas database created
- [ ] Backend deployed and accessible
- [ ] Frontend build successful
- [ ] Test all functionality

## 🌐 Recommended Architecture

```
Frontend (Netlify) → API calls → Backend (Railway) → MongoDB Atlas
```

## 💡 Tips

1. **Use MongoDB Atlas** for database (free tier available)
2. **Railway or Render** for backend (better than Heroku free tier)
3. **Netlify** for frontend (excellent for React apps)
4. **Environment variables** for different environments
5. **Test locally** before deploying

## 🔗 Useful Links

- [Netlify Docs](https://docs.netlify.com/)
- [Railway Docs](https://docs.railway.app/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Vercel Docs](https://vercel.com/docs)
