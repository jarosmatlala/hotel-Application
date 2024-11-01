import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import './Gallery.css';
import GalleryNav from "./GalleryNav";

const Gallery = () => {
    const navigate = useNavigate();
    const [suites, setSuites] = useState([]);

    const fetchSuites = async () => {
        const querySnapshot = await getDocs(collection(db, "suites"));
        const suitesData = [];
        querySnapshot.forEach((doc) => {
            suitesData.push({ id: doc.id, ...doc.data() });
        });
        setSuites(suitesData);
    };

    useEffect(() => {
        fetchSuites();
    }, []);

    const handleRoomSelection = (roomType, price) => {
        const roomDetails = { roomType, price, userId: "unique-user-id" };
        navigate('/Droom', { state: roomDetails });
    };

    return (
        <>
            <GalleryNav />
            <div className="gallery-container">
                {suites.map((suite) => (
                    <div key={suite.id} className="gallery-section">
                        <h3 className="gallery-title">{suite.roomType}</h3>
                        <div className="gallery-grid">
                            {suite.images && suite.images.map((image, index) => (
                                <RoomCard
                                    key={index}
                                    roomType={suite.roomType}
                                    price={suite.price}
                                    image={image}
                                    description={suite.descriptions && suite.descriptions[index] ? suite.descriptions[index] : "No description available"} 
                                    onSelect={handleRoomSelection}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

const RoomCard = ({ roomType, price, image,  onSelect }) => (
    <div className="room-card">
        <div className="room-image-container">
            <img src={image} alt={roomType} className="room-image" />
            <div className="room-title">{roomType}</div>
        </div>
        <button className="book-now-btn" onClick={() => onSelect(roomType, price)}>BOOK NOW</button>
        {/* <button className="book-now-btn">{price}</button> */}
    </div>
);

export default Gallery;
