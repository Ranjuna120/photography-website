import '../style/About.css';
import aboutImage from '../images/about.jpg'; // Add a relevant image to 'src/images'

export default function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text-container">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I’m a passionate photographer capturing timeless memories. Specializing in portraits, nature, and events. Every photo tells a story, and I'm here to help you tell yours.
          </p>
          <button className="about-btn">View Portfolio</button>
        </div>

        <div className="about-image-container">
          <img src={aboutImage} alt="About" className="about-image" />
        </div>
      </div>
    </section>
  );
}
