import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function AddOrEditBlog() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`http://localhost:5000/api/blogs/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setContent(data.content);
        })
        .catch((err) => {
          alert('Error fetching blog: ' + err.message);
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = { title, content };
    const method = id ? 'PUT' : 'POST';
    const url = id
      ? `http://localhost:5000/api/blogs/${id}`
      : 'http://localhost:5000/api/blogs';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert('Error: ' + (errorData.message || errorData.error || 'Unknown error'));
        return;
      }

      alert(id ? 'Blog updated successfully!' : 'Blog added successfully!');
      navigate('/blog');
    } catch (err) {
      alert('Network error: ' + err.message);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh', // ✅ full page height for vertical centering
        display: 'flex',     // ✅ Flex for centering
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0f172a',
        padding: '2rem',
        color: '#f5f5f5',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '500px',
          backgroundColor: '#1f2937',
          padding: '2rem',
          borderRadius: '10px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
        }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#ffffff' }}>
          {id ? 'Edit Blog' : 'Add New Blog'}
        </h1>

        {loading ? (
          <p style={{ textAlign: 'center', color: '#9ca3af' }}>Loading blog...</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <input
              type="text"
              placeholder="Blog Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{
                padding: '0.8rem',
                borderRadius: '5px',
                border: '1px solid #374151',
                backgroundColor: '#111827',
                color: '#f5f5f5',
                fontSize: '1rem',
              }}
            />
            <textarea
              placeholder="Blog Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="6"
              required
              style={{
                padding: '0.8rem',
                borderRadius: '5px',
                border: '1px solid #374151',
                backgroundColor: '#111827',
                color: '#f5f5f5',
                fontSize: '1rem',
                resize: 'vertical',
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                padding: '0.8rem',
                backgroundColor: '#4ade80',
                color: '#0f172a',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'background-color 0.3s ease, transform 0.2s ease',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#22c55e')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#4ade80')}
            >
              {id ? 'Update Blog' : 'Add Blog'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
