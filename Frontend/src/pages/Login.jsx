import React, { useState } from 'react';
import '../style/Login.css';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        // Save token or user info in localStorage if needed
        localStorage.setItem('token', data.token);
        alert('Login successful');
        // Redirect or do something else
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Error connecting to server');
    }
  };

  return (
    <section className="min-h-screen p-8 bg-gray-900 text-white flex justify-center items-center">
      <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-bold">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded bg-gray-700 text-white"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded bg-gray-700 text-white"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-white text-gray-900 font-semibold py-2 rounded">Login</button>
      </form>
    </section>
  );
}
