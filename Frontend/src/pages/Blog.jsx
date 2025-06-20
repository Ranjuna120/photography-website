// ✅ Blog.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Blog.css';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/blogs');
        const data = await res.json();
        if (res.ok) {
          setBlogs(data);
        } else {
          setError(data.error || 'Failed to fetch blogs');
        }
      } catch (err) {
        setError('Error connecting to server');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="blog-container">Loading blogs...</div>;
  if (error) return <div className="blog-container">{error}</div>;

  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>Photography Blog</h1>
        <p>Stories, Techniques & Adventures from Behind the Camera</p>
      </header>

      <div className="blog-grid">
        {blogs.map((post) => (
          <div key={post._id} className="blog-card">
            <h2>{post.title}</h2>
            <p className="blog-date">{new Date(post.date).toLocaleDateString()}</p>
            <p>{post.content.substring(0, 100)}...</p>
            <Link className="read-more" to={`/blog/${post._id}`}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
