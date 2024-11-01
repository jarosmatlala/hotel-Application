import React, { useState } from 'react';
import './Navbar.css'; 
import LOGO from "../assets/images/LOGO.png";

const GalleryNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <img src={LOGO} alt="Landing" className="logo" />
        <div className="menu-icon" onClick={toggleMenu}>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/" className="nav-links">Accomodation</a>
          </li>
         
          <li className="nav-item">
            <a href="/Contact" className="nav-links">Contact Us</a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default GalleryNav;
