import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerStyles.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";
import RoomNavbar from "./RoomNavbar";
import { useNavigate,useLocation } from "react-router-dom";
import Footer from "./Footer";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { CancelOutlined } from "@mui/icons-material";
import OrderConfirmed from "./OrderConfirmed";
import { useUserAuth } from "../context/UserAuthContext";
import { useSelector, useDispatch } from 'react-redux';
import { setNumberOfRooms, setNumberOfGuests, setCheckInDate, setCheckOutDate } from '../redux/bookingSlice';
import BookingPage from "./BookingPage";


function DatePickerWithLayout() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { numberOfRooms, numberOfGuests, checkInDate, checkOutDate } = useSelector(state => state.booking);
  
  const [selectedCheckInDate, setSelectedCheckInDate] = useState(checkInDate ? new Date(checkInDate) : null);
  const [selectedCheckOutDate, setSelectedCheckOutDate] = useState(checkOutDate ? new Date(checkOutDate) : null);
  const [bookingDetails, setBookingDetails] = useState(null);
  const roomPrice = 300.00;
  const [paymentData, setPaymentData] = useState({});
  const [isEditingRoom, setIsEditingRoom] = useState(false);
  const [newRoomName, setNewRoomName] = useState("");

  const { user } = useUserAuth();


  const handleCheckInDateChange = (date) => {
    setSelectedCheckInDate(date);
    dispatch(setCheckInDate(date ? date.toISOString() : null)); 
  };

  const handleCheckOutDateChange = (date) => {
    setSelectedCheckOutDate(date);
    dispatch(setCheckOutDate(date ? date.toISOString() : null)); 
  };


  
  

  const handleConfirmOrder = () => {
    console.log("Order confirmed");
  };

  useEffect(() => {
    const fetchBookingDetails = async () => {
      const docRef = doc(db, "bookings", "booking-id");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setBookingDetails(data);
        setNewRoomName(data.roomType);

        const totalAmount = data.price || 0;
        setPaymentData((prevData) => ({  amount: totalAmount }));


      } else {
        console.log("No such document!");
      }

    };

    fetchBookingDetails();
  }, []);

  useEffect(() => {
    if (bookingDetails) {
      const validNumberOfRooms = Number.isNaN(numberOfRooms) ? 0 : numberOfRooms;
      const calculatedTotalPrice = roomPrice * validNumberOfRooms;

      setBookingDetails({

        
        ...bookingDetails,
        checkIn: selectedCheckInDate,
        checkOut: selectedCheckOutDate,
        numberOfRooms: validNumberOfRooms,
        numberOfGuests,
        totalPrice: calculatedTotalPrice,
      });
    }
  }, [selectedCheckInDate, selectedCheckOutDate, numberOfRooms,numberOfGuests]);

  const handleEmailClick = () => {
    if (bookingDetails) {
      navigate("confirmed");
    }
  };


  const handleClick = () => {
    navigate('/Gallery');
  }

  const initialOptions = {
    "client-id": "AeAoUdddVyuyGm9-_loMbx_L7GNzHcRsRFu1KUu-LDzzs81FvBCOmoUi465med8ooCu5I_cbetOdeZV6",
    currency: "USD",
    intent: "capture"

  }

  const createOrder = (data, actions) => {

    const totalAmount = bookingDetails && bookingDetails.totalPrice 
    ? bookingDetails.totalPrice.toFixed(2): '0.00'; 

    if (parseFloat(totalAmount) <= 0) {
      console.error("The total amount must be greather than zero");
      return;
    }

    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: totalAmount,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      console.log('Order ID:', data.orderID);
      alert("Transaction completed by" + details.payer.name.given_name);
    });
  };
  paypal.Buttons({
    createOrder: createOrder,
    onApprove: onApprove
  }).render('#paypal-button-container');


  const handleRoomNameChange = (e) => {
    setNewRoomName(e.target.value);
  };

  const handleRoomNameSave = () => {
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      roomType: newRoomName,
    }));
    setIsEditingRoom(false);
  };

  const handleEditClick = () => {
    setIsEditingRoom(true);
  }

  return (


    <>
      <RoomNavbar />

      <br />
      <br />
      <br />

      <div className="calendar-container">
        <div className="search-box">

          {/* <div className="search-item"> Hello
            <span style={{ fontWeight: "bold", cursor: "pointer" }}
              onClick={handleEmailClick}
            >
              ({user?.email || "Not logged in"})</span>    Here is your Booking Summary       
              
               </div> */}


          <div className="search-item">
            <label>Check In</label>
            <DatePicker
              selected={selectedCheckInDate}
              onChange={handleCheckInDateChange}
              placeholderText="Select Check-In Date"
            />

          </div>
          <div className="search-item">
            <label>Check Out</label>
            <DatePicker
              selected={selectedCheckOutDate}
              onChange={handleCheckOutDateChange}
              placeholderText="Select Check-Out Date"
            />
          </div>

          <div className="search-item">
            <label>Room Qnty</label>
            <input
              type="number"
              value={numberOfRooms}
              onChange={(e) => dispatch(setNumberOfRooms(Number(e.target.value)))}
              min="1"
            />
          </div>
          <div className="search-item">
            <label>No of Guests</label>
            <input
              type="number"
              value={numberOfGuests}
              onChange={(e) => dispatch(setNumberOfGuests(Number(e.target.value)))}
              min="1"
            />
          </div>

          {/* <div>
            <button className="search-item" onClick={handleClick}  >Change Room</button>
          </div> */}
        </div>

      </div>


      <div>

        <br />
        <br />
        {bookingDetails && (
          <div className="summary">

<div className="search-item"> Hello
            <span style={{ fontWeight: "bold", cursor: "pointer" }}
              onClick={handleEmailClick}
            >
              ({user?.email || "Not logged in"})</span>    Here is your Booking Summary       
              
               </div>

            <h4>Booking Summary</h4>

            {isEditingRoom ? (
              <div>
                <input
                  type="text"
                  value={newRoomName}
                  onChange={handleRoomNameChange}
                  placeholder="Enter new room name"
                />
                <button onClick={handleRoomNameSave}>Save</button>
              </div>
            ) : (
              <div>
                <p>
                  <strong>Room:</strong> {bookingDetails.roomType}
                  <button onClick={handleEditClick}>Edit Room</button>
                </p>
              </div>
            )}



            <p><strong>Price:</strong> {bookingDetails.price}</p>
            <p><strong>Check-In Date:</strong> {selectedCheckInDate ? selectedCheckInDate.toDateString() : "Not selected"}</p>
            <p><strong>Check-Out Date:</strong> {selectedCheckOutDate ? selectedCheckOutDate.toDateString() : "Not selected"}</p>
            <p><strong>Total Price for {numberOfRooms} Room(s):</strong> {bookingDetails.totalPrice}</p>
            <p><strong>Number of Guests:</strong> {numberOfGuests}</p>

            <div className="modal-container">

              <div className="icons-container">
                <OrderConfirmed order={bookingDetails} />
                <CancelOutlined
                  size={40}
                  onClick={handleConfirmOrder}
                  className="cancel"
                />
              </div>

              <div className="paybtn">

              <PayPalScriptProvider options={initialOptions}  >

<PayPalButtons
  createOrder={(data, actions) => {
    const totalAmount = bookingDetails && bookingDetails.totalPrice
          ? bookingDetails.totalPrice.toFixed(2)
          : '0.00';

        if (parseFloat(totalAmount) <= 0) {
          console.error("The total amount must be greater than zero");
          return null; // Return null if total amount is not valid
        }

        return actions.order.create({
          purchase_units: [
            {
              amount: {
                currency_code: "USD",
                value: totalAmount,
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const details = await actions.order.capture();
        console.log('Order ID:', data.orderID);
        alert("Transaction completed by " + details.payer.name.given_name);
      }}



/>
</PayPalScriptProvider>
              </div>

<div>
  <BookingPage/>
</div>
              


            </div>
          </div>
        )}
      </div>



      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
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

export default DatePickerWithLayout;
