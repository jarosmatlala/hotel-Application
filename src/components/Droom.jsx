import React from "react";
import Room2 from "../assets/images/Room2.jpg";
import Room1 from "../assets/images/Room2.jpg";
import '@fortawesome/fontawesome-free/css/all.css';
// import './Accommodation.css';
import RoomNavbar from "./RoomNavbar";


import { useLocation } from 'react-router-dom';

const Droom = () => {

  const location = useLocation();
  const roomDetails = location.state || {};

  return (
    <>
      <RoomNavbar />


     
  
      <div className="landing-page">
        <br />
        <br />
        <div className="image-container">
          <img src={Room2} alt="Landing" className="landing-image" />

<p>Spacious and luxuriously appointed rooms with bath and shower, private patio and spectacular view of the Drakensberg mountains. The Mountain View Rooms have an inter-leading door for family requirements .</p>
          <div className="row">

          </div>
          <br />
          <div className="section">
            <h3>FEATURES</h3>
            <br />

            <i className="fa-solid fa-wifi">WIFI</i>
            <i className="fa-solid fa-shower">SHOWER</i>
            <i className="fa-solid fa-tv">DSTV</i>
            <i className="fa-solid fa-tv">DSTV</i>

            <br />
            <br />
          </div>

          <div className="room-card">

            <div className="room-image-container">
              <img src={Room2} alt="Landing" className="landing-image" />
            </div>
          </div>

          <div className="room-card">
            <div className="room-image-container">
              <img src={Room1} alt="One Bedroom" className="room-image" />
            </div>
          </div>

          <div className="room-card">
            <div className="room-image-container">
              <img src={Room1} alt="One Bedroom" className="room-image" />
            </div>
          </div>

          <div className="room-card">
            <div className="room-image-container">
              <img src={Room1} alt="One Bedroom" className="room-image" />
            </div>
          </div>

          <div className="room-card">
            <div className="room-image-container">
              <img src={Room1} alt="One Bedroom" className="room-image" />
            </div>
          </div>

          <div className="room-card">
            <div className="room-image-container">
              <img src={Room1} alt="One Bedroom" className="room-image" />
            </div>

            <div>
              <br />
              <br />
             

            </div>
            
          </div>


        </div>

<div>

  
</div>

      </div>
      
<div>
  

</div>

   </>

  );
};

export default Droom;
