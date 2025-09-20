import { useNavigate } from 'react-router-dom';

import '../style/About.css';
import aboutMe from '../images/aboutMe.jpg';  

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
          <p className="about-bio">
            With over 7 years of experience, I have worked with clients across the country and my work has been featured in several exhibitions. My approach blends creativity with technical skill, ensuring every shot is unique.
          </p>
          <ul className="about-achievements">
            <li>🏆 Winner, National Photography Award 2023</li>
            <li>📸 Exhibited at City Art Gallery, 2022</li>
            <li>🌍 Traveled to 15+ countries for photography projects</li>
          </ul>
          <div className="about-links">
            <a href="https://www.instagram.com/r_i_v_i_t_h/" target="_blank" rel="noopener noreferrer">Instagram</a> | 
            <a href="https://www.facebook.com/rivith.ranjuna/" target="_blank" rel="noopener noreferrer">Facebook</a> | 
            <a href="/resume.pdf" download>Download Resume</a>
          </div>
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
