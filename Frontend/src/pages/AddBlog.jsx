import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Blog.css'; // ✅ Reuse existing styles

export default function AddBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to add blog');
      }

      navigate('/blog');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>Add New Blog Post</h1>
      </header>

      <form onSubmit={handleSubmit} className="blog-form">
        <div>
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="blog-input"
          />
        </div>
        <div>
          <textarea
            placeholder="Blog Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="blog-textarea"
            rows="8"
          />
        </div>
        <button type="submit" className="read-more" disabled={loading}>
          {loading ? 'Adding...' : 'Add Blog'}
        </button>
        {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
      </form>
    </div>
  );
}
