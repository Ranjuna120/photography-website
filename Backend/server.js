const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Serve uploads folder statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// ✅ Routes
const photoRoutes = require('./routes/photos');
const contactRoutes = require('./routes/contacts');
const blogRoutes = require('./routes/blogRoutes');

app.use('/api/photos', photoRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/blogs', blogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
