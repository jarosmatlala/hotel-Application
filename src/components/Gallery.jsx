import React from "react";
import Room2 from "../assets/images/Room2.jpg";
import m from "../assets/images/m.jpg";
import Room1 from "../assets/images/Room2.jpg";

import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import bchr from "../assets/images/bchr.jpg";
import './Accommodation.css';
import GalleryNav from "./GalleryNav";
import Footer from "./Footer";
import './Footer.css';


const Gallery = () => {
    const navigate = useNavigate();

   

    const handleRoomSelection = (roomType, price) => {
        const roomDetails = {
          roomType,
          price,
          userId: "unique-user-id", 
        };
        navigate('/Droom', { state: roomDetails });
      };

    


    return (

        <>

            <GalleryNav />

            <div className="landing-page">
                <div className="image-container">

                    <br />

                    <div className="section">
                        <h3>BACHELOR</h3>

                    </div>

                    <div className="room-card">

                        <div className="room-image-container">
                            <img src={Room1} alt="Landing" className="landing-image" />
                            <div className="room-title">Garden View Room</div>
                        </div>
                        <button className="book-now-btn" onClick={() => handleRoomSelection("Garden View Room", "R300.00")}>VIEW</button>

                        <button className="book-now-btn"   >R300.00</button>

                    </div>

                    <div className="room-card">
                        <div className="room-image-container">
                            <img src={Room1} alt="One Bedroom" className="room-image" />
                            <div className="room-title">Mountain View Room</div>
                        </div>
                        <button className="book-now-btn" onClick={() => handleRoomSelection("Mountain View", "R300.00")}>VIEW</button>
                        <button className="book-now-btn"   >R300.00</button>


                    </div>

                    <div className="room-card">
                        <div className="room-image-container">
                            <img src={Room1} alt="One Bedroom" className="room-image" />
                            <div className="room-title">Luxury Room</div>
                        </div>
                        <button className="book-now-btn" onClick={() => handleRoomSelection("Luxury", "R300.00")}>VIEW</button>
                        <button className="book-now-btn"   >R300.00</button>

                    </div>

                    <div className="section">
                        <h3>ONE AND HALF BEDROOM</h3>

                    </div>

                    <div className="room-card">

                        <div className="room-image-container">
                            <img src={Room2} alt="Landing" className="landing-image" />
                            <div className="room-title">Family Room</div>
                        </div>
                        <button className="book-now-btn" onClick={() => handleRoomSelection("Family Room", "R300.00")}>VIEW</button>
                        <button className="book-now-btn"   >R300.00</button>

                    </div>

                    <div className="room-card">
                        <div className="room-image-container">
                            <img src={Room1} alt="One Bedroom" className="room-image" />
                            <div className="room-title">Accessible Room</div>
                        </div>
                        <button className="book-now-btn" onClick={() => handleRoomSelection("Accessible Room", "R300.00")}>VIEW</button>
                        <button className="book-now-btn"   >R300.00</button>

                    </div>

                    <div className="room-card">
                        <div className="room-image-container">
                            <img src={Room1} alt="One Bedroom" className="room-image" />
                            <div className="room-title">Standard Room</div>
                        </div>
                        <button className="book-now-btn" onClick={() => handleRoomSelection("Standard Room", "R300.00")}>VIEW</button>
                        <button className="book-now-btn"   >R300.00</button>

                    </div>

                    <div className="section">
                        <h3>DOUBLE BEDROOM</h3>

                    </div>

                    <div className="room-card">

                        <div class="room-image-container">
                            <img src={Room2} alt="Landing" className="landing-image" />
                            <div className="room-title">King Rooms</div>
                        </div>
                        <button className="book-now-btn" onClick={() => handleRoomSelection("Kings Rooms", "R300.00")}>VIEW</button>
                        <button className="book-now-btn"   >R300.00</button>

                    </div>

                    <div className="room-card">
                        <div className="room-image-container">
                            <img src={Room1} alt="One Bedroom" className="room-image" />
                            <div className="room-title">Presidential Suite</div>
                        </div>
                        <button className="book-now-btn" onClick={() => handleRoomSelection("Presidential Suite", "R300.00")}>VIEW</button>
                        <button className="book-now-btn"   >R300.00</button>

                    </div>

                    <div className="room-card">
                        <div className="room-image-container">
                            <img src={Room1} alt="One Bedroom" className="room-image" />
                            <div className="room-title">Garden View</div>
                        </div>
                        <button className="book-now-btn" onClick={() => handleRoomSelection("One Bedroom", "R300.00")}>VIEW</button>
                        <button className="book-now-btn"   >R300.00</button>

                    </div>



                </div>


            </div>

            <div className="sec">
                hello
            </div>


            <div className="section">
                <h3></h3>
                <footer className="footer">
                    <div className="container">
                        <div className="footer-content">
                            <p>920 Zane Isle, Lebsackfurt, 38755</p>
                            <p>(207) 555-0136</p>
                            <a href="mailto:jaro@example.com">jaro@gmail.com</a>
                        </div>
                        <div className="footer-socials">
                            <a href="#" target="_blank" aria-label="Facebook"><i className="fab fa-facebook-f">Facebook</i></a>
                            <a href="#" target="_blank" aria-label="Instagram"><i className="fab fa-instagram">Instagram</i></a>
                        </div>
                    </div>
                </footer>
            </div>


        </>


    );
};

export default Gallery;
