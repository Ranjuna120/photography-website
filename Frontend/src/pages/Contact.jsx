import { useState, useEffect } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import '../style/Contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowHeading(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(data.message);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setError(data.error || 'Submission failed');
      }
    } catch (err) {
      setError('Error submitting form');
    }
  };

  return (
    <section className="contact-container">
      <div className={`reach-out ${showHeading ? 'show' : ''}`}>
        Reach out
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
             For speaking events, interviews, print or licensing requests:{' '}
             <a href="mailto:rivithranjuna60@gmail.com" className="email-link">
              rivithranjuna60@gmail.com
             </a>
         </p>

          <div className="social-links">
            <p>Connect with me on Social</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/r_i_v_i_t_h/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.facebook.com/rivith.ranjuna/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name (required)"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email (required)"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>

          {success && <p className="success">{success}</p>}
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </section>
  );
}
