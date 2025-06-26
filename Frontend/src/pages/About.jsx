import { useNavigate } from 'react-router-dom';

import '../style/About.css';
import aboutMe from '../images/aboutMe.jpg'; // Add a relevant image to 'src/images'

export default function About() {

  const navigate = useNavigate();

  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text-container">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I’m a passionate photographer capturing timeless memories. Specializing in portraits, nature, and events. Every photo tells a story, and I'm here to help you tell yours.
          </p>
          <button className="about-btn" onClick={() => navigate('/portfolio')}>
             View Portfolio
          </button>

        </div>

        <div className="about-image-container">
          <img src={aboutMe} alt="About" className="about-image" />
        </div>
      </div>
    </section>
  );
}
