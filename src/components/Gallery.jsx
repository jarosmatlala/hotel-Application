import React from "react";
import Room2 from "../assets/images/Room2.jpg";
import Room1 from "../assets/images/Room1.jpg"; 
import { useNavigate } from "react-router-dom";
import './Gallery.css';
import GalleryNav from "./GalleryNav";

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
            <div className="gallery-container">
                <div className="gallery-section">
                    <h3 className="gallery-title">BACHELOR</h3>
                    <div className="gallery-grid">
                        <RoomCard roomType="Garden View Room" price="R300.00" image={Room1} onSelect={handleRoomSelection} />
                        <RoomCard roomType="Mountain View Room" price="R300.00" image={Room1} onSelect={handleRoomSelection} />
                        <RoomCard roomType="Luxury Room" price="R300.00" image={Room1} onSelect={handleRoomSelection} />
                    </div>
                </div>
                <div className="gallery-section">
                    <h3 className="gallery-title">ONE AND HALF BEDROOM</h3>
                    <div className="gallery-grid">
                        <RoomCard roomType="Family Room" price="R300.00" image={Room2} onSelect={handleRoomSelection} />
                        <RoomCard roomType="Accessible Room" price="R300.00" image={Room1} onSelect={handleRoomSelection} />
                        <RoomCard roomType="Standard Room" price="R300.00" image={Room1} onSelect={handleRoomSelection} />
                    </div>
                </div>
                <div className="gallery-section">
                    <h3 className="gallery-title">DOUBLE BEDROOM</h3>
                    <div className="gallery-grid">
                        <RoomCard roomType="King Rooms" price="R300.00" image={Room2} onSelect={handleRoomSelection} />
                        <RoomCard roomType="Presidential Suite" price="R300.00" image={Room1} onSelect={handleRoomSelection} />
                        <RoomCard roomType="Garden View" price="R300.00" image={Room1} onSelect={handleRoomSelection} />
                    </div>
                </div>
            </div>
        </>
    );
};

const RoomCard = ({ roomType, price, image, onSelect }) => (
    <div className="room-card">
        <div className="room-image-container">
            <img src={image} alt={roomType} className="room-image" />
            <div className="room-title">{roomType}</div>
        </div>
        <button className="book-now-btn" onClick={() => onSelect(roomType, price)}>VIEW</button>
        <button className="book-now-btn">{price}</button>
    </div>
);

export default Gallery;
