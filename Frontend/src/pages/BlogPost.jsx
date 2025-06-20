import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../style/Blog.css';

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/blogs/${id}`);
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error('Error fetching blog post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p className="blog-container">Loading...</p>;

  if (!post) {
    return (
      <div className="blog-container">
        <h2>Post not found</h2>
        <Link to="/blog" className="read-more">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>{post.title}</h1>
        <p className="blog-date">{new Date(post.date).toLocaleDateString()}</p>
      </header>

      {post.mediaUrl && (
        post.mediaType === 'video' ? (
          <video src={`http://localhost:5000${post.mediaUrl}`} controls style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
        ) : (
          <img src={`http://localhost:5000${post.mediaUrl}`} alt="Blog Media" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
        )
      )}

      <article className="blog-content">
        <p>{post.content}</p>
      </article>

      <Link to="/blog" className="read-more">← Back to Blog</Link>
    </div>
  );
}
