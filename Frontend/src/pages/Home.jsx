import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Home.css';

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';
import img10 from '../images/img10.jpg';
import img11 from '../images/img11.jpg';
import img12 from '../images/img12.jpg';
import img13 from '../images/img13.jpg';
import img14 from '../images/img14.jpg';
import img15 from '../images/img15.jpg';
import img16 from '../images/img16.jpg';
import img17 from '../images/img17.jpg';
import img18 from '../images/img18.jpg';
import img19 from '../images/img19.jpg';

import heroImg from '../images/heroImg.jpg'; // NEW featured image

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11,
  img12, img13, img14, img15, img16, img17, img18, img19,
];

// Spinner component
function Spinner() {
  return <div className="spinner"></div>;
}

export default function Home() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const navigate = useNavigate();

  // Track image loading
  useEffect(() => {
    if (loadedImages === images.length) {
      setTimeout(() => setLoading(false), 400); // small delay for effect
    }
  }, [loadedImages]);

  const openModal = (index) => {
    setSelectedImg(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => setSelectedImg(null);

  const nextImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImg(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImg(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="home-container">
      {/* ✅ Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-content">
          <h1>Explore My World of Photography</h1>
          <button onClick={() => navigate('/portfolio')}>View Portfolio</button>
        </div>
      </section>

      {/* Existing Header */}
      <header className="page-header">
        <h1>Welcome to PhotoGallery</h1>
        <p>Capturing life’s beauty through the lens.</p>
      </header>

      {/* Gallery with Spinner */}
      {loading ? (
        <Spinner />
      ) : (
        <div className="gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              className="gallery-image fade-in"
              onClick={() => openModal(index)}
              onLoad={() => setLoadedImages((count) => count + 1)}
              style={{ animationDelay: `${index * 0.07}s` }}
            />
          ))}
        </div>
      )}

      {/* Preload images for spinner logic */}
      <div style={{ display: 'none' }}>
        {loading &&
          images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt=""
              onLoad={() => setLoadedImages((count) => count + 1)}
            />
          ))}
      </div>

      {selectedImg && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={selectedImg} alt="Large view" />
          <button className="prev" onClick={prevImage}>❮</button>
          <button className="next" onClick={nextImage}>❯</button>
        </div>
      )}
    </div>
  );
}
