import React, { useState } from 'react';
import '../style/Event.css';

import Event1 from '../images/Event1.jpg';
import Event2 from '../images/Event2.jpg';
import Event3 from '../images/Event3.jpg';
import Event4 from '../images/Event4.jpg';
import Event5 from '../images/Event5.jpg';
import Event6 from '../images/Event6.jpg';

const images = [Event1, Event2, Event3, Event4, Event5, Event5 ];
const Event = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="event-page">
      <h1>Event Highlights</h1>
      <p className="description">
        Memorable moments from exclusive events and celebrations captured beautifully.
      </p>

      <div className="event-gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Event ${index + 1}`}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {/* 🌟 Lightbox */}
      {lightboxOpen && (
        <div className="lightbox">
          <span className="close" onClick={closeLightbox}>&times;</span>
          <img src={images[currentIndex]} alt="Preview" className="lightbox-img" />
          <span className="prev" onClick={goPrev}>&#10094;</span>
          <span className="next" onClick={goNext}>&#10095;</span>
        </div>
      )}
    </div>
  );
};

export default Event;
