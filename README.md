# 📸 Photography Website

A modern, full-stack photography portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js) and styled with Tailwind CSS.

## ✨ Features

- **Portfolio Showcase**: Display photography work in organized galleries (Portrait, Nature, Events)
- **Blog System**: Share photography stories, techniques, and adventures
- **Admin Dashboard**: Manage photos, blogs, and content
- **Contact Form**: Allow visitors to get in touch
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Media Upload**: Support for both images and videos
- **Authentication**: Secure admin login system
- **Modern UI**: Clean, professional design with smooth animations

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
photography-website/
├── Frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context providers
│   │   ├── images/         # Static images
│   │   └── style/          # CSS styles
│   └── package.json
├── Backend/                 # Node.js backend API
│   ├── controllers/        # Route controllers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── uploads/           # File uploads storage
│   └── server.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Clone the Repository
```bash
git clone https://github.com/Ranjuna120/photography-website.git
cd photography-website
```

### Backend Setup
1. Navigate to the backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the Backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/photography-website
# or use MongoDB Atlas connection string
```

4. Start the backend server:
```bash
npm start
```

The backend will run on `http://localhost:5000`

### Frontend Setup
1. Navigate to the frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## 📊 API Endpoints

### Photos
- `GET /api/photos` - Get all photos
- `POST /api/photos` - Upload new photo
- `DELETE /api/photos/:id` - Delete photo

### Blogs
- `GET /api/blogs` - Get all blog posts
- `GET /api/blogs/:id` - Get single blog post
- `POST /api/blogs` - Create new blog post
- `PUT /api/blogs/:id` - Update blog post
- `DELETE /api/blogs/:id` - Delete blog post

### Contact
- `POST /api/contact` - Submit contact form

## 🎨 Features Overview

### Gallery Categories
- **Portrait Photography** - Professional portrait sessions
- **Nature Photography** - Landscape and wildlife shots
- **Event Photography** - Weddings, parties, and special occasions

### Blog System
- Create and edit blog posts with rich media
- Upload images and videos
- Responsive blog layout
- Admin management capabilities

### Admin Dashboard
- Secure authentication
- Content management
- File upload system
- Blog post editor

## 🔧 Configuration

### Environment Variables
Create `.env` files in both Frontend and Backend directories:

**Backend .env:**
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration can be found in `Frontend/tailwind.config.js`.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Ranjuna** - [@Ranjuna120](https://github.com/Ranjuna120)

Project Link: [https://github.com/Ranjuna120/photography-website](https://github.com/Ranjuna120/photography-website)

## 🙏 Acknowledgments

- React community for excellent documentation
- Tailwind CSS for the amazing utility-first approach
- MongoDB for the flexible database solution
- All photographers who inspire beautiful web design

---

⭐ **Star this repository if you found it helpful!**
