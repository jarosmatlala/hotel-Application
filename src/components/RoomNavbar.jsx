import React, { useState } from 'react';
import './Navbar.css'; 

const RoomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo"> </h1>
        <div className="menu-icon" onClick={toggleMenu}>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          
          <li className="nav-item">
            <a href="/Gallery" className="nav-links">Browse for more</a>
          </li>
         
          <li className="nav-item">
            <a href="/Date" className="nav-links">BOOK NOW</a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default RoomNavbar;
