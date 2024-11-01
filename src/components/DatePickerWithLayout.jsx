import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerStyles.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import RoomNavbar from "./RoomNavbar";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { CancelOutlined } from "@mui/icons-material";
import OrderConfirmed from "./OrderConfirmed";
import { useUserAuth } from "../context/UserAuthContext";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation} from "react-router-dom";
import { setNumberOfRooms, setNumberOfGuests, setCheckInDate, setCheckOutDate } from '../redux/bookingSlice';

const DatePickerWithLayout = () => {
    const location = useLocation();
    const room = location.state?.room;
    // const { room } = location.state || {};
    const [selectedCheckInDate, setSelectedCheckInDate] = useState(null);
    const [selectedCheckOutDate, setSelectedCheckOutDate] = useState(null);
    const [bookingDetails, setBookingDetails] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { user } = useUserAuth();
    const dispatch = useDispatch();

    const { numberOfRooms, numberOfGuests } = useSelector(state => state.booking);

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    useEffect(() => {
      if (room) {
        console.log('Room Data:', room);
          const calculatedTotalPrice = room.price * numberOfRooms; 
          console.log('Calculated Total Price:', calculatedTotalPrice);

          setBookingDetails({
              roomType: room.brand, 
              price: room.price,
              totalPrice: calculatedTotalPrice,
          });
      }else {
        console.error("No room data available");
    }
  }, [room, numberOfRooms]);





useEffect(() => {
    if (bookingDetails) {
        const calculatedTotalPrice = bookingDetails.price * numberOfRooms; 
        setBookingDetails(prev =>({
          ...prev,
          checkIn: selectedCheckInDate,
          checkOut: selectedCheckOutDate,
          numberOfRooms,
          numberOfGuests,
          totalPrice: calculatedTotalPrice,
        }));
    }
  }, [selectedCheckInDate, selectedCheckOutDate, numberOfRooms, numberOfGuests]);

    // useEffect(() => {
    //     if (bookingDetails) {
    //         const calculatedTotalPrice = bookingDetails.price * numberOfRooms;
    //         setBookingDetails(prev => ({
    //             ...prev,
    //             checkIn: selectedCheckInDate,
    //             checkOut: selectedCheckOutDate,
    //             numberOfRooms,
    //             numberOfGuests,
    //             totalPrice: calculatedTotalPrice,
    //         }));
    //     }
    // }, [selectedCheckInDate, selectedCheckOutDate, numberOfRooms, numberOfGuests]);


    useEffect(() => {
        console.log(room);
      if (room && typeof room.price === 'number') {
          const calculatedTotalPrice = room.price * numberOfRooms;
          setBookingDetails({
              roomType: room.brand,
              price: room.price,
              totalPrice: calculatedTotalPrice,
          });
      } else {
          console.error("Invalid room price or no room data available");
      }
  }, [room, numberOfRooms]);
  

    const createOrder = async (data, actions) => {
        const totalAmount = bookingDetails?.totalPrice;

        

        if (!totalAmount || isNaN(totalAmount) || totalAmount <= 0) {
          console.error("Invalid total amount:", totalAmount);
          return; 
      }

        return actions.order.create({
            purchase_units: [{
                amount: {
                    currency_code: "USD",
                    value: totalAmount.toFixed(2),
                },
            }],
        }).then(order => {
            console.log('Created Order ID:', order.id);
            return order.id; 
        }).catch(err => {
            console.error('Error creating order:', err);
            throw err; 
        });
    };

    const onApprove = async (data, actions) => {
        try {
            const details = await actions.order.capture();
            console.log('Transaction completed by', details.payer.name.given_name);
            alert(`Transaction completed by ${details.payer.name.given_name}`);
            navigate("/confirmed");
        } catch (error) {
            console.error('Error capturing order:', error);
            setError("An error occurred while processing your payment. Please try again.");
        }
    };

    return (
        <>
            <RoomNavbar />
            <div>
                <h1>Select Date</h1>
                <div className="calendar-container">
                    <div className="search-box">
                        <div className="search-item">
                            <label>Check In</label>
                            <DatePicker
                                selected={selectedCheckInDate}
                                onChange={date => {
                                    setSelectedCheckInDate(date);
                                    dispatch(setCheckInDate(date ? date.toISOString() : null));
                                }}
                                placeholderText="Select Check-In Date"
                            />
                        </div>
                        <div className="search-item">
                            <label>Check Out</label>
                            <DatePicker
                                selected={selectedCheckOutDate}
                                onChange={date => {
                                    setSelectedCheckOutDate(date);
                                    dispatch(setCheckOutDate(date ? date.toISOString() : null));
                                }}
                                placeholderText="Select Check-Out Date"
                            />
                        </div>
                        <div className="search-item">
                            <label>Room Qnty</label>
                            <input
                                type="number"
                                value={numberOfRooms}
                                onChange={e => dispatch(setNumberOfRooms(Number(e.target.value)))}
                                min="1"
                            />
                        </div>
                        <div className="search-item">
                            <label>No of Guests</label>
                            <input
                                type="number"
                                value={numberOfGuests}
                                onChange={e => dispatch(setNumberOfGuests(Number(e.target.value)))}
                                min="1"
                            />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                {bookingDetails && (
                    <div className="summary">
                        {/* <div className="search-item"> 
                            <span style={{ fontWeight: "bold", cursor: "pointer" }}>
                                {user?.email || "Not logged in"}
                            </span> 
                            Here is your Booking Summary
                        </div> */}
                        <h4>Booking Summary</h4>
                        <p><strong>Room:</strong> {bookingDetails.roomType}</p>
                        <p><strong>Check-In Date:</strong> {selectedCheckInDate ? selectedCheckInDate.toDateString() : "Not selected"}</p>
                        <p><strong>Check-Out Date:</strong> {selectedCheckOutDate ? selectedCheckOutDate.toDateString() : "Not selected"}</p>
                        <p><strong>Total Price for {numberOfRooms} Room(s):</strong> ${bookingDetails.totalPrice?.toFixed(2) || "0.00"}</p>
                        <p><strong>Number of Guests:</strong> {numberOfGuests}</p>

                        {/* <div className="icons-container">
                            <OrderConfirmed order={bookingDetails} />
                            <CancelOutlined size={40} onClick={() => console.log("Order confirmed")} className="cancel" />
                        </div> */}

                        <h2>PayPal Payment</h2>
                        {error && <div style={{ color: "red" }}>{error}</div>}
                        <PayPalScriptProvider options={{ clientId: "AeAoUdddVyuyGm9-_loMbx_L7GNzHcRsRFu1KUu-LDzzs81FvBCOmoUi465med8ooCu5I_cbetOdeZV6" }}>
                            <PayPalButtons
                                createOrder={createOrder}
                                onApprove={onApprove}
                            />
                        </PayPalScriptProvider>
                    </div>
                )}
                <Footer />
            </div>
        </>
    );
};

export default DatePickerWithLayout;
