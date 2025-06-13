export default function Portfolio() {
  return (
    <section className="min-h-screen p-8 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">My Portfolio</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Example portfolio items */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Project 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Portrait Series</h3>
            <p className="text-gray-400 text-sm">Intimate portraits capturing emotion and personality.</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Project 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Nature Collection</h3>
            <p className="text-gray-400 text-sm">Stunning landscapes and wildlife in their natural beauty.</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Project 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Event Highlights</h3>
            <p className="text-gray-400 text-sm">Capturing moments from weddings, festivals, and live events.</p>
          </div>
        </div>

        {/* Add more portfolio items as needed */}
      </div>
    </section>
  );
}
