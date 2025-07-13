import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../style/Blog.css';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

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

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        const res = await fetch(`http://localhost:5000/api/blogs/${id}`, {
          method: 'DELETE',
        });
        if (res.ok) {
          setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
        } else {
          console.error('Failed to delete blog');
        }
      } catch (err) {
        console.error('Error deleting blog:', err);
      }
    }
  };

  return (
    <div className="blog-container">
      <header className="blog-header" style={{ position: 'relative' }}>
        <h1>Photography Blog</h1>
        <p>Stories, Techniques & Adventures from Behind the Camera</p>
        <Link
          to="/add-blog"
          className="read-more"
          style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', padding: '0.4rem 1rem', fontSize: '0.9rem' }}
        >
          ➕ Add New Blog
        </Link>
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

              {/* ✅ Display media thumbnail */}
              {post.mediaUrl && (
                post.mediaType === 'video' ? (
                  <video src={`http://localhost:5000${post.mediaUrl}`} controls style={{ width: '100%', borderRadius: '8px', marginBottom: '0.5rem' }} />
                ) : (
                  <img src={`http://localhost:5000${post.mediaUrl}`} alt="Blog Media" style={{ width: '100%', borderRadius: '8px', marginBottom: '0.5rem' }} />
                )
              )}

              <button className="read-more" onClick={() => navigate(`/blog/${post._id}`)}>
                Read More
              </button>

              <button className="read-more" onClick={() => navigate(`/edit-blog/${post._id}`)} style={{ backgroundColor: '#3b82f6', marginLeft: '0.5rem' }}>
                ✏️ Edit
              </button>

              <button className="read-more" onClick={() => handleDelete(post._id)} style={{ backgroundColor: '#ef4444', marginLeft: '0.5rem' }}>
                🗑️ Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
