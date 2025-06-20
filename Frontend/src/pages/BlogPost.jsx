import { useParams, Link } from 'react-router-dom';
import '../style/Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'Behind the Lens: Capturing the Perfect Portrait',
    date: 'June 15, 2025',
    content: 'Full content of the first blog post. You can write a complete article here...',
  },
  {
    id: 2,
    title: 'Top 5 Nature Photography Spots in Sri Lanka',
    date: 'June 10, 2025',
    content: 'Full article about the best nature photography spots in Sri Lanka...',
  },
  {
    id: 3,
    title: 'How to Tell a Story Through Event Photography',
    date: 'June 5, 2025',
    content: 'Detailed post explaining how to capture memorable moments at events...',
  },
];

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

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
        <p className="blog-date">{post.date}</p>
      </header>

      <article className="blog-content">
        <p>{post.content}</p>
      </article>

      <Link to="/blog" className="read-more">← Back to Blog</Link>
    </div>
  );
}
