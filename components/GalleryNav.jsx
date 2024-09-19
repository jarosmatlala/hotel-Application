import React, { useState } from 'react';
import './Navbar.css'; 

const GalleryNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">JARO </h1>
        <div className="menu-icon" onClick={toggleMenu}>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/Acc" className="nav-links">Accomodation</a>
          </li>
         
          <li className="nav-item">
            <a href="/Registration" className="nav-links">Contact Us</a>
          </li>
          <li className="nav-item">
            <a href="/Date" className="nav-links">Book-Now</a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default GalleryNav;
