import React from 'react';
import '../style/Nature.css'; // ✅ Import CSS file

const Nature = () => {
  return (
    <div className="nature-page">
      <h1>Nature Collection</h1>
      <p className="description">
        A journey through breathtaking landscapes and serene natural beauty.
      </p>

      <div className="nature-gallery">
        <img src="https://source.unsplash.com/400x500/?nature,forest" alt="Nature 1" />
        <img src="https://source.unsplash.com/400x500/?nature,mountain" alt="Nature 2" />
        <img src="https://source.unsplash.com/400x500/?nature,river" alt="Nature 3" />
        <img src="https://source.unsplash.com/400x500/?nature,beach" alt="Nature 4" />
        <img src="https://source.unsplash.com/400x500/?nature,waterfall" alt="Nature 5" />
        <img src="https://source.unsplash.com/400x500/?nature,sri-lanka" alt="Nature 6" />
      </div>
    </div>
  );
};

export default Nature;
