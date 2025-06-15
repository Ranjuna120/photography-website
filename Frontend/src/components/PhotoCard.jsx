export default function PhotoCard({ title, image, description }) {
  return (
    <div className="gallery-item">
      <img src={image} alt={title} />
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
