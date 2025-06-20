import '../style/Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'Behind the Lens: Capturing the Perfect Portrait',
    date: 'June 15, 2025',
    summary: 'Discover the techniques and stories behind my favorite portrait shoots.',
  },
  {
    id: 2,
    title: 'Top 5 Nature Photography Spots in Sri Lanka',
    date: 'June 10, 2025',
    summary: 'A guide to the most scenic landscapes for capturing breathtaking photos.',
  },
  {
    id: 3,
    title: 'How to Tell a Story Through Event Photography',
    date: 'June 5, 2025',
    summary: 'Tips for making every event photo a memorable moment.',
  },
];

export default function Blog() {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>Photography Blog</h1>
        <p>Stories, Techniques & Adventures from Behind the Camera</p>
      </header>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <h2>{post.title}</h2>
            <p className="blog-date">{post.date}</p>
            <p>{post.summary}</p>
            <button className="read-more">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}
