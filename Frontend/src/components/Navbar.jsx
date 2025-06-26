import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; // change the theme (e.g., dark mode / light mode)
import '../style/Navbar.css';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <h1 className="logo">PhotoGallery</h1>
      <div className="links">
        <Link to="/">Home</Link>
        {/* <Link to="/gallery">Gallery</Link> */}
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
        {/* <Link to="/login">Login</Link>
        <Link to="/register">Register</Link> */}
      </div>
      <div className="theme-toggle">
        <button
          className={theme === 'light' ? 'active' : ''}
          onClick={() => toggleTheme('light')}
        >
          Light
        </button>
        <button
          className={theme === 'dark' ? 'active' : ''}
          onClick={() => toggleTheme('dark')}
        >
          Dark
        </button>
      </div>
    </nav>
  );
}
