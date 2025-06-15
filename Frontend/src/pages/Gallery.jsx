import '../style/Gallery.css';
import PhotoCard from '../components/PhotoCard';

export default function Gallery() {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">

        <PhotoCard
          title="Portrait Series"
          image="https://via.placeholder.com/400x300"
          description="Intimate portraits capturing emotion and personality."
        />

        <PhotoCard
          title="Nature Collection"
          image="https://via.placeholder.com/400x300"
          description="Stunning landscapes and wildlife in their natural beauty."
        />

        <PhotoCard
          title="Event Highlights"
          image="https://via.placeholder.com/400x300"
          description="Capturing moments from weddings, festivals, and live events."
        />

      </div>
    </section>
  );
}
