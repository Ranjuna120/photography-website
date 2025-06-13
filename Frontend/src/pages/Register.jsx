export default function Register() {
  return (
    <section className="min-h-screen p-8 bg-gray-900 text-white flex justify-center items-center">
      <form className="bg-gray-800 p-6 rounded w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-bold">Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 rounded bg-gray-700 text-white"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded bg-gray-700 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded bg-gray-700 text-white"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 rounded bg-gray-700 text-white"
        />

        <button className="w-full bg-white text-gray-900 font-semibold py-2 rounded">
          Register
        </button>
      </form>
    </section>
  );
}
