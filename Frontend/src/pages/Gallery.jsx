import PhotoCard from '../components/PhotoCard';

export default function Gallery() {
  return (
    <section className="p-8 text-white bg-gray-800 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

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
