import { useState, useEffect } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
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
        setSuccess(data.message || 'Message sent successfully!');
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
        {/* Map */}
        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.01376927841!2d79.773705!3d6.927079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2595d2b2b2b2b%3A0x2b2b2b2b2b2b2b2b!2sColombo!5e0!3m2!1sen!2slk!4v1680000000000!5m2!1sen!2slk"
            width="100%"
            height="220"
            style={{ border: 0, borderRadius: '12px', marginBottom: '1.5rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            <FaMapMarkerAlt style={{ marginRight: 6 }} />
            Colombo, Sri Lanka
          </p>
          <p>
            <FaPhoneAlt style={{ marginRight: 6 }} />
            <a href="tel:+94775044731">+94 77 504 4731</a>
          </p>
          <p>
            <FaWhatsapp style={{ marginRight: 6, color: '#25D366' }} />
            <a
              href="https://wa.me/94715868009"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </p>
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
