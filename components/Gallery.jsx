import React from "react";
import Room2 from "../assets/images/Room2.jpg";
import Room1 from "../assets/images/Room2.jpg";

import './Accommodation.css';
import GalleryNav from "./GalleryNav";


const accomodation = () => {
    return (

<>

<GalleryNav/>

        <div className="landing-page">
            <div className="image-container">

                <br />

                <div className="section">
                    <h3>APARTMENTS</h3>

                </div>

                <div className="room-card">

                    <div class="room-image-container">
                        <img src={Room2} alt="Landing" className="landing-image" />
                        <div className="room-title">ONE BEDROOM1</div>
                    </div>
                    <button className="book-now-btn">BOOK NOW</button>
                </div>

                <div className="room-card">
                    <div className="room-image-container">
                        <img src={Room1} alt="One Bedroom" className="room-image" />
                        <div className="room-title">ONE BEDROOM</div>
                    </div>
                    <button className="book-now-btn">BOOK NOW</button>
                </div>

                <div className="room-card">
                    <div className="room-image-container">
                        <img src={Room1} alt="One Bedroom" className="room-image" />
                        <div className="room-title">ONE BEDROOM</div>
                    </div>
                    <button className="book-now-btn">BOOK NOW</button>
                </div>

                <div className="section">
                    <h3>ONE AND HALF BEDROOM</h3>

                </div>

                <div className="room-card">

                    <div class="room-image-container">
                        <img src={Room2} alt="Landing" className="landing-image" />
                        <div className="room-title">ONE BEDROOM1</div>
                    </div>
                    <button className="book-now-btn">BOOK NOW</button>
                </div>

                <div className="room-card">
                    <div className="room-image-container">
                        <img src={Room1} alt="One Bedroom" className="room-image" />
                        <div className="room-title">ONE BEDROOM</div>
                    </div>
                    <button className="book-now-btn">BOOK NOW</button>
                </div>

                <div className="room-card">
                    <div className="room-image-container">
                        <img src={Room1} alt="One Bedroom" className="room-image" />
                        <div className="room-title">ONE BEDROOM</div>
                    </div>
                    <button className="book-now-btn">BOOK NOW</button>
                </div>

                <div className="section">
                    <h3>DOUBLE BEDROOM</h3>

                </div>

                <div className="room-card">

                    <div class="room-image-container">
                        <img src={Room2} alt="Landing" className="landing-image" />
                        <div className="room-title">ONE BEDROOM1</div>
                    </div>
                    <button className="book-now-btn">BOOK NOW</button>
                </div>

                <div className="room-card">
                    <div className="room-image-container">
                        <img src={Room1} alt="One Bedroom" className="room-image" />
                        <div className="room-title">ONE BEDROOM</div>
                    </div>
                    <button className="book-now-btn">BOOK NOW</button>
                </div>

                <div className="room-card">
                    <div className="room-image-container">
                        <img src={Room1} alt="One Bedroom" className="room-image" />
                        <div className="room-title">ONE BEDROOM</div>
                    </div>
                    <button className="book-now-btn">BOOK NOW</button>
                </div>



            </div>


        </div>

        </>


    );
};

export default accomodation;
