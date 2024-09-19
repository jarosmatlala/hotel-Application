import React from "react";
import Room2 from "../assets/images/Room2.jpg";
import Room1 from "../assets/images/Room2.jpg";
import '@fortawesome/fontawesome-free/css/all.css';
import './Accommodation.css';
import RoomNavbar from "./RoomNavbar";





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

          <i classNameName="fa-solid fa-wifi">WIFI</i>
          <i classNameName="fa-solid fa-shower">SHOWER</i>
          <i classNameName="fa-solid fa-tv">DSTV</i>
          <i classNameName="fa-solid fa-tv">DSTV</i>

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
<div className="reviews-title1 ">
  <h3>JOSEPH</h3>
<p>These modern air-conditined rooms each contain a double bed,word desk,an en-suite bathroom with a shower and bathroom amenties.Each room is fitted with flat-scrreen satellite TV,tea and coffee station,electronic safe,and a bar fridge.</p>

</div>

  </div>
        </div>
        

      </div>


    </div>
<Footer/>
    </>


  );
};

export default Broom;
