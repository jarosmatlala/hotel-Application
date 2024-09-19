import React from "react";
import Room2 from "../assets/images/Room2.jpg";
import Room1 from "../assets/images/Room2.jpg";
import '@fortawesome/fontawesome-free/css/all.css';
import './Accommodation.css';
import RoomNavbar from "./RoomNavbar";
import halfbedroom from "../assets/images/halfbedroom.jpg";
import hlfbd2 from "../assets/images/hlfbd2.jpg";
import hlfbd3 from "../assets/images/hlfbd3.jpg";
import hlfbd4 from "../assets/images/hlfbd4.jpg";
import hlfbd5 from "../assets/images/hlfbd5.jpg";
import hlfbd6 from "../assets/images/hlfbd6.jpg";






const Hroom = () => {

  return (
<>
<RoomNavbar/>
    <div className="landing-page">
      <br />
      <br />
      <div className="image-container">
        <img src={halfbedroom} alt="Landing" className="landing-image" />

        <h3>ONE & HALF BEDROOM</h3>

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
            <img src={halfbedroom} alt="Landing" className="landing-image" />
          </div>
        </div>

        <div className="room-card">
          <div className="room-image-container">
            <img src={hlfbd2} alt="One Bedroom" className="room-image" />
          </div>
        </div>

        <div className="room-card">
          <div className="room-image-container">
            <img src={hlfbd3} alt="One Bedroom" className="room-image" />
          </div>
        </div>

        <div className="room-card">
          <div className="room-image-container">
            <img src={hlfbd4} alt="One Bedroom" className="room-image" />
          </div>
        </div>

        <div className="room-card">
          <div className="room-image-container">
            <img src={hlfbd5} alt="One Bedroom" className="room-image" />
          </div>
        </div>

        <div className="room-card">
          <div className="room-image-container">
            <img src={hlfbd6} alt="One Bedroom" className="room-image" />
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

    </>


  );
};

export default Hroom;
