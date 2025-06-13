export default function Contact() {
  return (
    <section className="min-h-screen p-8 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form className="max-w-md space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 rounded bg-gray-700 text-white" />
        <input type="email" placeholder="Your Email" className="w-full p-2 rounded bg-gray-700 text-white" />
        <textarea placeholder="Your Message" className="w-full p-2 rounded bg-gray-700 text-white" rows="4"></textarea>
        <button className="px-4 py-2 bg-white text-gray-900 font-semibold rounded">Send Message</button>
      </form>
    </section>
  );
}
