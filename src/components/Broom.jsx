import React from "react";
import Room2 from "../assets/images/Room2.jpg";
import Room1 from "../assets/images/Room2.jpg";
import '@fortawesome/fontawesome-free/css/all.css';
import RoomNavbar from "./RoomNavbar";
import Footer from "./Footer";
// import Broom from "./Broom.css";





const Broom = () => {

  return (
<>
<RoomNavbar/>
    <div className="landing-page">
      <br />
      <br />
      <div className="image-container">
        <img src={Room2} alt="Landing" className="landing-image" />

        <h3>BACHELOR ROOM</h3>

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

          <div class="room-image-container">
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

      <Footer/>

    </div>

    </>


  );
};

export default Broom;
