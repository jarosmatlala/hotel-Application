import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Import your Firestore instance
import { collection, getDocs } from "firebase/firestore";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import './Navbar.css';
import './Accommodation.css';
// import './Acco.css';
import AccNav from "./AccNav";
import Footer from "./Footer";

const Accomodation = () => {
  const [rooms, setRooms] = useState([]); // State to hold fetched rooms
  const navigate = useNavigate();

  // Function to fetch room data from Firestore
  const fetchRooms = async () => {
    const querySnapshot = await getDocs(collection(db, "room")); // Adjusted to use "room"
    const roomsData = [];
    querySnapshot.forEach((doc) => {
      roomsData.push({ id: doc.id, ...doc.data() }); // Add document data
    });
    setRooms(roomsData); // Set the state with fetched data
  };

  useEffect(() => {
    fetchRooms(); // Fetch data when the component mounts
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
          <h3>A BREATH OF FRESH AIR AND COMFORT</h3>
          <p>Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay.</p>

          <div className="row">
            {rooms.map((room) => (
              <div className="column" key={room.id}>
                <div className="room-titles">{room.brand}</div>
                {room.images && room.images.map((image, index) => (
                  <img key={index} src={image} alt={room.description} className="landing-image" />
                ))}
                <button className="book-now-btn" onClick={handleBook}>VIEW</button>
                <button className="book-now-btn">R300.00</button> {/* Adjust pricing logic as needed */}
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
