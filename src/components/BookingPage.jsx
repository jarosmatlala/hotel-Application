import React, { useState } from "react";
import OrderConfirmed from "./OrderConfirmed"; 

function BookingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [order, setOrder] = useState(null); 

  const handlePaymentSuccess = () => {
    const orderDetails = {
      id: "001",
      roomType: "Deluxe Suite",
      checkInDate: "2024-09-01",
      checkOutDate: "2024-09-05",
      price: 500,
    };

    setOrder(orderDetails); 
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <div>
      <button onClick={handlePaymentSuccess}>Complete Payment</button>

      {isModalOpen && <OrderConfirmed order={order} onClose={closeModal} />}
    </div>
  );
}

export default BookingPage;