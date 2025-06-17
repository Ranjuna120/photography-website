import React from 'react';
import '../style/Portrait.css'; 
import Home from '../images/Home.jpg';

const Portrait = () => {
  return (
    <div className="portrait-page">
      <h1>Portrait Collection</h1>
      <p className="description">
        Discover a curated series of beautiful portraits highlighting genuine emotion and personality.
      </p>

      <div className="portrait-gallery">
         
        <img src={Home} alt="Portrait 1" />

        <img src="https://source.unsplash.com/400x500/?portrait,man" alt="Portrait 2" />
        <img src="https://source.unsplash.com/400x500/?portrait,face" alt="Portrait 3" />
        <img src="https://source.unsplash.com/400x500/?portrait,model" alt="Portrait 4" />
        <img src="https://source.unsplash.com/400x500/?portrait,natural" alt="Portrait 5" />
        <img src="https://source.unsplash.com/400x500/?portrait,art" alt="Portrait 6" />
      </div>
    </div>
  );
};

export default Portrait;
