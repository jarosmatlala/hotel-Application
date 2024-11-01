import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
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
            <a href="/Acc" className="nav-links">HOME</a>
          </li>
       
          <li className="nav-item">
            <a href="/DatePicker" className="nav-links">Book-Now</a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
