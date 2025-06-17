import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../style/Portfolio.css';
import Portrait from '../images/Portrait.jpg';
import nature from '../images/nature.jpg';
import event from '../images/event.jpg';

export default function Portfolio() {

  const navigate = useNavigate();
const handleClick = () => {
    navigate('/portrait'); // Navigate to Portrait page
  };

  return (
    <section>
      <div className="grid">
        {/* 👇 Header as first grid item */}
        <h1 className="portfolio-header">My Portfolio</h1>

        {/* Portfolio Item 1 */}
        <div className="portfolio-item"onClick={handleClick} style={{ cursor: 'pointer' }}>
          <img src={Portrait} alt="Portrait Series" />
          <div className="content">
            <h3>Portrait Series</h3>
            <p>Intimate portraits capturing emotion and personality.</p>
          </div>
        </div>

        {/* Portfolio Item 2 */}
        <div className="portfolio-item">
          <img src={nature} alt="Nature Collection" />
          <div className="content">
            <h3>Nature Collection</h3>
            <p>Stunning landscapes and wildlife in their natural beauty.</p>
          </div>
        </div>

        {/* Portfolio Item 3 */}
        <div className="portfolio-item">
          <img src={event} alt="Event Highlights" />
          <div className="content">
            <h3>Event Highlights</h3>
            <p>Capturing moments from weddings, festivals, and live events.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
