import '../style/Footer.css';
import profileImg from '../images/profileImg.jpg'; // replace with your image
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Profile Section */}
        <div className="footer-profile">
          <img src={profileImg} alt="Profile" className="profile-img" />
          <h3 className="profile-name">@RIVITHRANJUNA</h3>
          <p className="profile-role">Photographer & Visual Storyteller</p>
        </div>

        {/* Subscribe Section */}
        <div className="footer-subscribe">
          <h3>SUBSCRIBE:</h3>
          <p>I’ll send you cool stuff from time to time.</p>
          <div className="subscribe-input">
            <input type="email" placeholder="email address" />
            <button type="button">
              <i className="fas fa-envelope"></i>
            </button>
          </div>

          {/* ✅ Social Icons moved here */}
          <div className="social-icons">
            <a href="https://www.instagram.com/r_i_v_i_t_h/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.facebook.com/rivith.ranjuna/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 PhotoGallery. All rights reserved.</p>
      </div>
    </footer>
  );
}
