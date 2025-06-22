import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function AddOrEditBlog() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [media, setMedia] = useState(null); // ✅ NEW: for image/video
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
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (media) formData.append('media', media); // ✅ append file

    const method = id ? 'PUT' : 'POST';
    const url = id
      ? `http://localhost:5000/api/blogs/${id}`
      : 'http://localhost:5000/api/blogs';

    try {
      const res = await fetch(url, {
        method,
        body: formData, // ✅ formData for file upload
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
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem', backgroundColor: '#0f172a', color: '#f5f5f5' }}>
      <div style={{ width: '100%', maxWidth: '500px', backgroundColor: '#1f2937', padding: '2rem', borderRadius: '10px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#ffffff' }}>{id ? 'Edit Blog' : 'Add New Blog'}</h1>

        {loading ? (
          <p style={{ textAlign: 'center', color: '#9ca3af' }}>Loading blog...</p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text"
              placeholder="Blog Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{ padding: '0.8rem', borderRadius: '5px', border: '1px solid #374151', backgroundColor: '#111827', color: '#f5f5f5' }}
            />
            <textarea
              placeholder="Blog Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="6"
              required
              style={{ padding: '0.8rem', borderRadius: '5px', border: '1px solid #374151', backgroundColor: '#111827', color: '#f5f5f5' }}
            ></textarea>

            {/* ✅ File input */}
            <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) => setMedia(e.target.files[0])}
              // style={{ color: '#f5f5f5' }}
            />

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
              }}
            >
              {id ? 'Update Blog' : 'Add Blog'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
