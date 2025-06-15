import { useState } from 'react';
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
 

const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
  
];

export default function Home() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImg(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImg(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImg(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImg(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <section className="home-container">
      <header className="hero">
        <h1 className="hero-title">Welcome to PhotoGallery</h1>
        <p className="hero-subtitle">Capturing life’s beauty through the lens.</p>
      </header>

      <div className="gallery">
        {images.map((img, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(index)}>
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      {selectedImg && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImg} alt="Enlarged view" />
          <button className="prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>❮ Prev</button>
          <button className="next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>Next ❯</button>
        </div>
      )}
    </section>
  );
}
