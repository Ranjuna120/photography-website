import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; // change the theme (e.g., dark mode / light mode)
import { useState } from 'react';
import '../style/Navbar.css';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <h1 className="logo">PhotoGallery</h1>

      {/* Hamburger toggle for mobile */}
      <button
        className="menu-toggle"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <div className={`links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        {/* <Link to="/gallery">Gallery</Link> */}
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <Link to="/blog" onClick={closeMenu}>Blog</Link>
        {/* <Link to="/login">Login</Link>
        <Link to="/register">Register</Link> */}
        {/* <Link to="/admin">Admin</Link> */}
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
