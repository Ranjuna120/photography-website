import React, { useState } from 'react';
import '../style/Portrait.css';
import Portrait1 from '../images/Portrait1.jpg';
import Portrait2 from '../images/Portrait2.jpg';
import Portrait3 from '../images/Portrait3.jpg';
import Portrait4 from '../images/Portrait4.jpg';
import Portrait5 from '../images/Portrait5.jpg';
import Portrait6 from '../images/Portrait6.jpg';

const images = [Portrait1, Portrait2, Portrait3, Portrait4, Portrait5, Portrait6];

const Portrait = () => {
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
    <div className="portrait-page">
      <h1>Portrait Collection</h1>
      <p className="description">
        Discover a curated series of beautiful portraits highlighting genuine emotion and personality.
      </p>

      <div className="portrait-gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Portrait ${index + 1}`}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {/* 🌟 Lightbox Viewer */}
      {lightboxOpen && (
        <div className="lightbox">
          <span className="close" onClick={closeLightbox}>&times;</span>
          <img src={images[currentIndex]} alt="Large view" className="lightbox-img" />
          <span className="prev" onClick={goPrev}>&#10094;</span>
          <span className="next" onClick={goNext}>&#10095;</span>
        </div>
      )}
    </div>
  );
};

export default Portrait;
