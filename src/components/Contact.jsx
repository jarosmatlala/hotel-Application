import React from 'react';
import './Contact.css';
import { Navbar } from "react-bootstrap";
import AccNav from "./AccNav";

const Contact = () => {
  return (
    <div className="contact-container">
              <AccNav/>

      <header className="contact-header">
        
      </header>

      <section className="contact-info">
        <h1>WANT TO RELAX A BIT AND UNWIND?</h1>
        <p>
          Do you have any enquiries, complaints or requests, please forward it to our support desk 
          and we will get back to you as soon as possible.
        </p>

        <div className="contact-details">
          <p>920 ZONE 16 GA-RANKUWA<br/>RRAMOKOKA STREET<br/>0208</p>
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

      <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3680965.2218149295!2d28.346200000000007!3d-25.7146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s920%20Zone%2016%20Garankuwa!5e0!3m2!1sen!2sza!4v1730427021396!5m2!1sen!2sza" width="600" height="450" style={{ border: 0 }} 
       allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>


      </section>
    </div>
  );
};

export default Contact;
 