import React, { useState } from 'react';
import './Navbar.css'; 
import LOGO from "../assets/images/LOGO.png";

const AccNav = () => {
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


          {/* <li className="nav-item">
            <a href="/Acc" className="nav-links">Accomodation</a>
          </li> */}
         
          {/* <li className="nav-item">
            <a href="/Registration" className="nav-links">Contact Us</a>
          </li> */}

          <li className="nav-item">
            <a href="/Gallery" className="nav-links">Gallery</a>
          </li>
          
          <li className="nav-item">
            <a href="/Contact" className="nav-links">Contact Us</a>
          </li>
          <li className="nav-item">
            <a href="/Login" className="nav-links">Book-Now</a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default AccNav;
