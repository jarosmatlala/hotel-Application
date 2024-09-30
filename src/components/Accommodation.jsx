import React from "react";
import Room2 from "../assets/images/Room2.jpg";
import Room1 from "../assets/images/Room2.jpg";
import room1 from "../assets/images/room1.jpg";
import Room3 from "../assets/images/Room3.jpg";
import Room7 from "../assets/images/Room7.jpg";
import LOGO from "../assets/images/LOGO.png";
import Deluxe from "../assets/images/Deluxe.webp";
import images from "../assets/images/images.jfif"
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import './Navbar.css'
import './Accommodation.css';
import { Navbar } from "react-bootstrap";
import AccNav from "./AccNav";
import double from "../assets/images/double.jpg";
import Footer from "./Footer";

const Accomodation = () => {
  const navigate = useNavigate();

  

  const handleBook = () => {
    navigate('/Droom')
  }

  const handleTroom = () => {
    navigate('/Troom')

  }

  const handleBroom = () => {
    navigate('/Broom')

  }

  const handleHroom = () => {
    navigate('/Hroom')

  }

  const handleProom = () => {
    navigate('/Proom')

  }

  const handleDroom = () => {
    navigate('/Droom')

  }

  const { user } = useUserAuth();
  console.log(user);

  return (
    <>

      <AccNav/>


      <div className="landing-page">
        <div className="image-container">
          <br />
          <br />
          <br />

          <img src={Room2} alt="Landing" className="landing-image1" />
<br />
<br />
          <h3>A BREATH OF FRESH AIR AND COMFORT</h3>
          <p>Each of our bright, light-flooded rooms come with everything you could possibly       </p>
          <p> need for a comfortable stay.</p>
          
      

          <div className="row">
            <div className="column">
              <div className="room-titles">TWIN SINGLE ROOM</div>

              <img src={double} alt="Landing" className="landing-image" />
              <button className="book-now-btn" onClick={handleBook}  >VIEW</button>
              <button className="book-now-btn"   >R300.00</button>


            </div>

            <div className="column">
              <div className="room-titles2">DOUBLE BEDROOM</div>

              <img src={Deluxe} alt="Landing" className="landing-image" />
              <button className="book-now-btn" onClick={handleDroom}  >VIEW</button>
              <button className="book-now-btn"   >R300.00</button>


            </div>

          </div>
          <br />
          <div className="section">
            <h3>APARTMENTS</h3>

          </div>

          <div className="room-card">

            <div className="room-image-container">
              <img src={room1} alt="Landing" className="landing-image" />
              <div className="room-title">BACHELOR</div>
            </div>
            <button className="book-now-btn" onClick={handleBroom}  >VIEW</button>
            <button className="book-now-btn"   >R300.00</button>

          </div>

          <div className="room-card">
            <div className="room-image-container">
              <img src={Room3} alt="One Bedroom" className="room-image" />
              <div className="room-title">ONE & HALF BED ROOM</div>
            </div>
            <button className="book-now-btn" onClick={handleHroom}  >VIEW</button>
            <button className="book-now-btn"   >R300.00</button>

          </div>

          <div className="room-card">
            <div className="room-image-container">
              <img src={Room7} alt="One Bedroom" className="room-image" />
              <div className="room-title">ONE BEDROOM</div>
            </div>
            <button className="book-now-btn" onClick={handleProom}  >VIEW</button>
            <button className="book-now-btn"   >R300.00</button>

          </div>



        </div>

        <div className="section1">
            <h3>APARTMENTS</h3>

          </div>

          <Footer/>

 
  

        </div>
  


        </>

  );
  <Footer/>

};

export default Accomodation;
