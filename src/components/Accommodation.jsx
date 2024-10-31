import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import './Navbar.css';
import './Accommodation.css';
import AccNav from "./AccNav";
import Footer from "./Footer";
import Landing from "../assets/images/Landing.webp";
import Velmor1 from "../assets/images/Velmor1.webp"

const Accomodation = () => {
  const [rooms, setRooms] = useState([]); 
  const navigate = useNavigate();

  const fetchRooms = async () => {
    const querySnapshot = await getDocs(collection(db, "room")); 
    const roomsData = [];
    querySnapshot.forEach((doc) => {
      roomsData.push({ id: doc.id, ...doc.data() }); 
    });
    setRooms(roomsData); 
  };

  useEffect(() => {
    fetchRooms(); 
  }, []);

  const handleBook = () => navigate('/Droom');
  const handleTroom = () => navigate('/Troom');
  const handleBroom = () => navigate('/Broom');
  const handleHroom = () => navigate('/Hroom');
  const handleProom = () => navigate('/Proom');
  const handleDroom = () => navigate('/Droom');

  const { user } = useUserAuth();
  console.log(user);

  return (
    <>
      <AccNav />
      <div className="landing-page">
        <div className="image-container">
        <img src={Velmor1} alt="Landing" className="landing-image" />
          <h3>A BREATH OF FRESH AIR AND COMFORT</h3>
          <p>Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay.</p>

          <div className="row">
            {rooms.map((room) => (
              <div className="column" key={room.id}>
                <div className="room-titles">{room.brand}</div>
                {room.images && room.images.map((image, index) => (
                  <img key={index} src={image} alt={room.description} className="landing-image" />
                ))}
                <p className="room-description">{room.description}</p> 
                <button className="book-now-btn" onClick={handleBook}>VIEW</button>
              </div>
            ))}
          </div>

          <div className="section1">
            <h3>APARTMENTS</h3>
          </div>

          <Footer />

        </div>
      </div>
    </>
  );
};

export default Accomodation;
