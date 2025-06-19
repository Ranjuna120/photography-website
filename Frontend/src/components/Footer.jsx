import '../style/Footer.css';
import profileImg from '../images/profileImg.jpg'; // replace with your image

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Profile Section */}
        <div className="footer-profile">
          <img src={profileImg} alt="Profile" className="profile-img" />
          <h3 className="profile-name">@RIVITHRANJUNA</h3>
          <p className="profile-role">Photographer & Visual Storyteller</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-spotify"></i></a>
          </div>
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
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 PhotoGallery. All rights reserved.</p>
      </div>
    </footer>
  );
}
