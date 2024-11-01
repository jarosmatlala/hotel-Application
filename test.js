import React from 'react';
import './Contact.css';
import AccNav from "./AccNav";

const Contact = () => {
  return (
    <div className="contact-container">
      <AccNav />
      <header className="contact-header">
      </header>
      <section className="contact-info">
        <h1>WE ARE HERE FOR YOU</h1>
        <p>
          Do you have any enquiries, complaints or requests? Please forward them to our support desk and we will get back to you as soon as possible.
        </p>
        <div className="contact-details">
          <p>920 ZONE 16 GA-RANKUWA<br />RRAMOKOKA STREET<br />0208</p>
          <p>Phone: +44 345 678 903</p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
      <section className="map-section">
        <img src="map-placeholder.png" alt="Location Map" className="location-map" />
      </section>
    </div>
  );
};

export default Contact;
