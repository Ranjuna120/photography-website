import React from 'react';
import '../style/Portfolio.css';

export default function Portfolio() {
  return (
    <section>
      <h2>My Portfolio</h2>

      <div className="grid">
        {/* Portfolio Item 1 */}
        <div className="portfolio-item">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Project 1"
          />
          <div className="content">
            <h3>Portrait Series</h3>
            <p>Intimate portraits capturing emotion and personality.</p>
          </div>
        </div>

        {/* Portfolio Item 2 */}
        <div className="portfolio-item">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Project 2"
          />
          <div className="content">
            <h3>Nature Collection</h3>
            <p>Stunning landscapes and wildlife in their natural beauty.</p>
          </div>
        </div>

        {/* Portfolio Item 3 */}
        <div className="portfolio-item">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Project 3"
          />
          <div className="content">
            <h3>Event Highlights</h3>
            <p>Capturing moments from weddings, festivals, and live events.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
