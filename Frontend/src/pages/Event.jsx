import React from 'react';
import '../style/Event.css'; // ✅ Import CSS file

const Event = () => {
  return (
    <div className="event-page">
      <h1>Event Highlights</h1>
      <p className="description">
        Memorable moments from exclusive events and celebrations captured beautifully.
      </p>

      <div className="event-gallery">
        <img src="https://source.unsplash.com/400x500/?event,party" alt="Event 1" />
        <img src="https://source.unsplash.com/400x500/?event,concert" alt="Event 2" />
        <img src="https://source.unsplash.com/400x500/?event,festival" alt="Event 3" />
        <img src="https://source.unsplash.com/400x500/?event,wedding" alt="Event 4" />
        <img src="https://source.unsplash.com/400x500/?event,celebration" alt="Event 5" />
        <img src="https://source.unsplash.com/400x500/?event,award" alt="Event 6" />
      </div>
    </div>
  );
};

export default Event;
