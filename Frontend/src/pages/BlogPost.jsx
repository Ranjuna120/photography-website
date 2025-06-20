import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../style/Blog.css';

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/blogs/${id}`);
        const data = await res.json();
        if (res.ok) {
          setPost(data);
        } else {
          setError(data.error || 'Failed to fetch blog post');
        }
      } catch (err) {
        setError('Error connecting to server');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div className="blog-container">Loading post...</div>;
  if (error) return <div className="blog-container">{error}</div>;
  if (!post) return <div className="blog-container">Post not found</div>;

  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>{post.title}</h1>
        <p className="blog-date">{new Date(post.date).toLocaleDateString()}</p>
      </header>

      <article className="blog-content">
        <p>{post.content}</p>
      </article>

      <Link to="/blog" className="read-more">← Back to Blog</Link>
    </div>
  );
}
