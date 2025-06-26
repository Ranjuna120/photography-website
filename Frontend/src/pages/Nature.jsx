import React, { useState } from 'react';
import '../style/Nature.css';

import Nature1 from '../images/Nature1.jpg';
import Nature2 from '../images/Nature2.jpg';
import Nature3 from '../images/Nature3.jpg';
import Nature4 from '../images/Nature4.jpg';
import Nature5 from '../images/Nature5.jpg';
import Nature6 from '../images/Nature6.jpg';

const images = [Nature1, Nature2, Nature3, Nature4, Nature5, Nature6 ];
const Nature = () => {
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
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="nature-page">
      <h1>Nature Collection</h1>
      <p className="description">
        A journey through breathtaking landscapes and serene natural beauty.
      </p>

      <div className="nature-gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Nature ${index + 1}`}
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

export default Nature;
