import React from 'react';
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';

const EventDetails = () => {
  return (
    <section id="event" className="event-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="highlight-icon">🏖️</span> The Solana Summer Event
          </h2>
          <p className="section-intro">
            Join us for an unforgettable celebration of summer, blockchain, and beach culture
          </p>
        </div>
        
        <div className="event-highlights">
          <div className="event-card">
            <div className="event-card-icon">
              <FiCalendar />
            </div>
            <h3 className="event-card-title">Date</h3>
            <p className="event-card-detail">August 23, 2025</p>
          </div>
          
          <div className="event-card">
            <div className="event-card-icon">
              <FiClock />
            </div>
            <h3 className="event-card-title">Time</h3>
            <p className="event-card-detail">5:00 PM – Sunset</p>
          </div>
          
          <div className="event-card">
            <div className="event-card-icon">
              <FiMapPin />
            </div>
            <h3 className="event-card-title">Location</h3>
            <p className="event-card-detail">Fletcher Cove Park<br />Solana Beach, CA</p>
          </div>
        </div>
        
        <div className="event-details">
          <h3 className="details-title">Event Highlights</h3>
          <ul className="details-list">
            <li>Live music</li>
            <li>Beach games and competitions</li>
            <li>Giveaways</li>
            <li>Gourmet food trucks</li>
            <li>Solana developer meetup</li>
            <li>Sunset celebration</li>
          </ul>
          
          <div className="event-note">
            <p>
              <strong>Note:</strong> This is a free community event open to all ages. 
              No specific requirements—just bring your summer spirit!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;