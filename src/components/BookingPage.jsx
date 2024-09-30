import React, { useState } from "react";
import OrderConfirmed from "./OrderConfirmed"; // Import the child component (modal)

function BookingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Controls modal visibility
  const [order, setOrder] = useState(null); // Holds the order details

  // Function that simulates successful payment
  const handlePaymentSuccess = () => {
    const orderDetails = {
      id: "001",
      roomType: "Deluxe Suite",
      checkInDate: "2024-09-01",
      checkOutDate: "2024-09-05",
      price: 500,
    };

    setOrder(orderDetails); // Set the order details after payment
    setIsModalOpen(true); // Show the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false); // Hide the modal
  };

  return (
    <div>
      {/* Button to simulate completing payment */}
      <button onClick={handlePaymentSuccess}>Complete Payment</button>

      {/* Conditionally render the modal when isModalOpen is true */}
      {isModalOpen && <OrderConfirmed order={order} onClose={closeModal} />}
    </div>
  );
}

export default BookingPage;