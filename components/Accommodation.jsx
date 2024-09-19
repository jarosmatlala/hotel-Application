import React from "react";
import Room2 from "../assets/images/Room2.jpg";
import Room1 from "../assets/images/Room2.jpg";
import room1 from "../assets/images/room1.jpg";
import Room3 from "../assets/images/Room3.jpg";
import Room7 from "../assets/images/Room7.jpg";
import Deluxe from "../assets/images/Deluxe.webp";
import images from "../assets/images/images.jfif"
import {Button} from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";


import { useNavigate } from "react-router-dom";
import './Navbar.css'

import './Accommodation.css';
import { Navbar } from "react-bootstrap";


const Accomodation = () => {
  const navigate = useNavigate();
  
  const handleBook = () =>{
    navigate ('/Droom')
}

const handleDroom = () =>{
  navigate ('/Troom')

}

const {user} = useUserAuth();
console.log(user);

  return (
<>
<Navbar/>


    <div className="landing-page">
      <div className="image-container">

        <h3>A BREATH OF FRESH AIR AND COMFORT</h3>
        <p>Each of our bright, light-flooded rooms come with everything you could possibly       </p>
        <p> need for a comfortable stay.</p>

        <div className="row">
          <div className="column"> 
          <div className="room-titles">TWIN SINGLE ROOM</div>

            <img src={images} alt="Landing" className="landing-image" />
            <button className="book-now-btn" onClick={handleBook}  >BOOK NOW</button>

          </div>

          <div className="column"> 
          <div className="room-titles2">DOUBLE BEDROOM</div>

            <img src={Deluxe} alt="Landing" className="landing-image" />
          <button className="book-now-btn" onClick={handleDroom}  >BOOK NOW</button>

          </div>

        </div>
        <br />
        <div className="section">
          <h3>APARTMENTS</h3>

        </div>

        <div className="room-card">

          <div class="room-image-container">
            <img src={room1} alt="Landing" className="landing-image" />
            <div className="room-title">BACHELOR</div>
          </div>
          <button className="book-now-btn">BOOK NOW</button>
        </div>

        <div className="room-card">
          <div className="room-image-container">
            <img src={Room3} alt="One Bedroom" className="room-image" />
            <div className="room-title">ONE & HALF BED ROOM</div>   

          </div>
          <button className="book-now-btn">BOOK NOW</button>
        </div>

        <div className="room-card">
          <div className="room-image-container">
            <img src={Room7} alt="One Bedroom" className="room-image" />
            <div className="room-title">ONE BEDROOM</div>
          </div>
          <button className="book-now-btn">BOOK NOW</button>
        </div>



      </div>


    </div>


    </>

  );
};

export default Accomodation;
