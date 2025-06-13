export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center p-4">
      <h1 className="text-5xl font-bold mb-4">Welcome to PhotoGallery</h1>
      <p className="text-gray-300 max-w-lg mb-8">Capturing life’s beauty through the lens.</p>
      <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-200 transition">
        Explore Gallery
      </button>
    </section>
  );
}
