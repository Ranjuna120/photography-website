import React, { useState } from 'react';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Registration successful. Please login.');
        // Redirect to login page if you want
      } else {
        setError(data.error || 'Registration failed');
      }
    } catch (err) {
      setError('Error connecting to server');
    }
  };

  return (
    <section className="min-h-screen p-8 bg-gray-900 text-white flex justify-center items-center">
      <form onSubmit={handleRegister} className="bg-gray-800 p-6 rounded w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-bold">Register</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 rounded bg-gray-700 text-white"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          required
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 rounded bg-gray-700 text-white"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
        />
        <button className="w-full bg-white text-gray-900 font-semibold py-2 rounded">
          Register
        </button>
      </form>
    </section>
  );
}
