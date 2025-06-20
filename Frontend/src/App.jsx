import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Portfolio from './pages/Portfolio';
import Portrait from './pages/Portrait';

import Nature from './pages/Nature'; 
import Event from './pages/Event'; 

import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AddBlog from './pages/AddBlog';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/portrait" element={<Portrait />} />
        {/* <Route path="/portfolio/portrait" element={<Portrait />} /> */}

        <Route path="/nature" element={<Nature />} />
        <Route path="/event" element={<Event />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/add-blog" element={<AddBlog />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
