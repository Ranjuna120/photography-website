import { useState, useEffect } from 'react';
import '../style/AdminDashboard.css.css';

export default function AdminDashboard() {
  const [tab, setTab] = useState('photos');
  const [photos, setPhotos] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [analytics, setAnalytics] = useState({});
  const [loading, setLoading] = useState(false);

  // Photo CRUD states
  const [newPhoto, setNewPhoto] = useState({ title: '', url: '' });
  const [editPhoto, setEditPhoto] = useState(null);
  const [editPhotoTitle, setEditPhotoTitle] = useState('');
  const [editPhotoUrl, setEditPhotoUrl] = useState('');

  // Blog CRUD states
  const [newBlog, setNewBlog] = useState({ title: '', content: '' });
  const [editBlog, setEditBlog] = useState(null);
  const [editBlogTitle, setEditBlogTitle] = useState('');
  const [editBlogContent, setEditBlogContent] = useState('');

  // Contact CRUD states
  const [editContact, setEditContact] = useState(null);
  const [editContactName, setEditContactName] = useState('');
  const [editContactEmail, setEditContactEmail] = useState('');

  // Fetch data from backend when tab changes
  useEffect(() => {
    setLoading(true);
    let url = '';
    if (tab === 'photos') url = '/api/photos';
    if (tab === 'blogs') url = '/api/blogs';
    if (tab === 'contacts') url = '/api/contacts';
    if (tab === 'analytics') url = '/api/analytics';

    if (url) {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          if (tab === 'photos') setPhotos(data);
          if (tab === 'blogs') setBlogs(data);
          if (tab === 'contacts') setContacts(data);
          if (tab === 'analytics') setAnalytics(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [tab]);

  // --- Photos CRUD ---
  const handleAddPhoto = (e) => {
    e.preventDefault();
    fetch('/api/photos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPhoto),
    })
      .then(res => res.json())
      .then(photo => {
        setPhotos([...photos, photo]);
        setNewPhoto({ title: '', url: '' });
      });
  };

  const handleDeletePhoto = (id) => {
    fetch(`/api/photos/${id}`, { method: 'DELETE' })
      .then(() => setPhotos(photos.filter(photo => photo._id !== id && photo.id !== id)));
  };

  const startEditPhoto = (photo) => {
    setEditPhoto(photo);
    setEditPhotoTitle(photo.title);
    setEditPhotoUrl(photo.url);
  };

  const handleEditPhoto = (e) => {
    e.preventDefault();
    fetch(`/api/photos/${editPhoto._id || editPhoto.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: editPhotoTitle, url: editPhotoUrl }),
    })
      .then(res => res.json())
      .then(updated => {
        setPhotos(photos.map(p => (p._id === updated._id || p.id === updated.id ? updated : p)));
        setEditPhoto(null);
      });
  };

  // --- Blogs CRUD ---
  const handleAddBlog = (e) => {
    e.preventDefault();
    fetch('/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBlog),
    })
      .then(res => res.json())
      .then(blog => {
        setBlogs([...blogs, blog]);
        setNewBlog({ title: '', content: '' });
      });
  };

  const handleDeleteBlog = (id) => {
    fetch(`/api/blogs/${id}`, { method: 'DELETE' })
      .then(() => setBlogs(blogs.filter(blog => blog._id !== id && blog.id !== id)));
  };

  const startEditBlog = (blog) => {
    setEditBlog(blog);
    setEditBlogTitle(blog.title);
    setEditBlogContent(blog.content);
  };

  const handleEditBlog = (e) => {
    e.preventDefault();
    fetch(`/api/blogs/${editBlog._id || editBlog.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: editBlogTitle, content: editBlogContent }),
    })
      .then(res => res.json())
      .then(updated => {
        setBlogs(blogs.map(b => (b._id === updated._id || b.id === updated.id ? updated : b)));
        setEditBlog(null);
      });
  };

  // --- Contacts CRUD (edit/delete only) ---
  const handleDeleteContact = (id) => {
    fetch(`/api/contacts/${id}`, { method: 'DELETE' })
      .then(() => setContacts(contacts.filter(contact => contact._id !== id && contact.id !== id)));
  };

  const startEditContact = (contact) => {
    setEditContact(contact);
    setEditContactName(contact.name);
    setEditContactEmail(contact.email);
  };

  const handleEditContact = (e) => {
    e.preventDefault();
    fetch(`/api/contacts/${editContact._id || editContact.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: editContactName, email: editContactEmail }),
    })
      .then(res => res.json())
      .then(updated => {
        setContacts(contacts.map(c => (c._id === updated._id || c.id === updated.id ? updated : c)));
        setEditContact(null);
      });
  };

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <button className={tab === 'photos' ? 'active' : ''} onClick={() => setTab('photos')}>Photos</button>
        <button className={tab === 'blogs' ? 'active' : ''} onClick={() => setTab('blogs')}>Blogs</button>
        <button className={tab === 'contacts' ? 'active' : ''} onClick={() => setTab('contacts')}>Contacts</button>
        <button className={tab === 'analytics' ? 'active' : ''} onClick={() => setTab('analytics')}>Analytics</button>
      </aside>
      <main className="admin-main">
        {loading && <p>Loading...</p>}

        {/* Photos CRUD */}
        {tab === 'photos' && !loading && (
          <section>
            <h2>Manage Photos</h2>
            <form onSubmit={editPhoto ? handleEditPhoto : handleAddPhoto} style={{ marginBottom: 16 }}>
              <input
                type="text"
                placeholder="Title"
                value={editPhoto ? editPhotoTitle : newPhoto.title}
                onChange={e =>
                  editPhoto
                    ? setEditPhotoTitle(e.target.value)
                    : setNewPhoto({ ...newPhoto, title: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Image URL"
                value={editPhoto ? editPhotoUrl : newPhoto.url}
                onChange={e =>
                  editPhoto
                    ? setEditPhotoUrl(e.target.value)
                    : setNewPhoto({ ...newPhoto, url: e.target.value })
                }
                required
              />
              <button type="submit">{editPhoto ? 'Save' : 'Add'}</button>
              {editPhoto && <button type="button" onClick={() => setEditPhoto(null)}>Cancel</button>}
            </form>
            <ul className="admin-list">
              {photos.map(photo => (
                <li key={photo._id || photo.id}>
                  <img src={photo.url} alt={photo.title} className="admin-thumb" />
                  <span className="photo-title">{photo.title}</span>
                  <button className="btn edit" onClick={() => startEditPhoto(photo)}>Edit</button>
                  <button className="btn delete" onClick={() => handleDeletePhoto(photo._id || photo.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Blogs CRUD */}
        {tab === 'blogs' && !loading && (
          <section>
            <h2>Manage Blogs</h2>
            <form onSubmit={editBlog ? handleEditBlog : handleAddBlog} style={{ marginBottom: 16 }}>
              <input
                type="text"
                placeholder="Title"
                value={editBlog ? editBlogTitle : newBlog.title}
                onChange={e =>
                  editBlog
                    ? setEditBlogTitle(e.target.value)
                    : setNewBlog({ ...newBlog, title: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Content"
                value={editBlog ? editBlogContent : newBlog.content}
                onChange={e =>
                  editBlog
                    ? setEditBlogContent(e.target.value)
                    : setNewBlog({ ...newBlog, content: e.target.value })
                }
                required
              />
              <button type="submit">{editBlog ? 'Save' : 'Add'}</button>
              {editBlog && <button type="button" onClick={() => setEditBlog(null)}>Cancel</button>}
            </form>
            <ul className="admin-list">
              {blogs.map(blog => (
                <li key={blog._id || blog.id}>
                  <span className="photo-title">{blog.title}</span>
                  <button className="btn edit" onClick={() => startEditBlog(blog)}>Edit</button>
                  <button className="btn delete" onClick={() => handleDeleteBlog(blog._id || blog.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Contacts CRUD */}
        {tab === 'contacts' && !loading && (
          <section>
            <h2>Contact Submissions</h2>
            <ul className="admin-list">
              {contacts.map(contact => (
                <li key={contact._id || contact.id}>
                  {editContact && (editContact._id === contact._id || editContact.id === contact.id) ? (
                    <form className="edit-form" onSubmit={handleEditContact}>
                      <input
                        type="text"
                        value={editContactName}
                        onChange={e => setEditContactName(e.target.value)}
                        required
                      />
                      <input
                        type="email"
                        value={editContactEmail}
                        onChange={e => setEditContactEmail(e.target.value)}
                        required
                      />
                      <button type="submit" className="btn save">Save</button>
                      <button type="button" className="btn cancel" onClick={() => setEditContact(null)}>Cancel</button>
                    </form>
                  ) : (
                    <>
                      <span className="photo-title">{contact.name} - {contact.email}</span>
                      <button className="btn edit" onClick={() => startEditContact(contact)}>Edit</button>
                      <button className="btn delete" onClick={() => handleDeleteContact(contact._id || contact.id)}>Delete</button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Analytics */}
        {tab === 'analytics' && !loading && (
          <section>
            <h2>Analytics</h2>
            <ul>
              <li>Total Visits: {analytics.visits || 0}</li>
              <li>Most Viewed Photo: {analytics.topPhoto || 'N/A'}</li>
            </ul>
          </section>
        )}
      </main>
    </div>
  );
}