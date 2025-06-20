import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Blog.css';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/blogs');
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>Photography Blog</h1>
        <p>Stories, Techniques & Adventures from Behind the Camera</p>
      </header>

      {loading ? (
        <p>Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        <div className="blog-grid">
          {blogs.map((post) => (
            <div key={post._id} className="blog-card">
              <h2>{post.title}</h2>
              <p className="blog-date">{new Date(post.date).toLocaleDateString()}</p>
              <button className="read-more" onClick={() => navigate(`/blog/${post._id}`)}>
                Read More
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
