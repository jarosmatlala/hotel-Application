import React from "react";

function OrderConfirmed({ order }) {
  const { id, roomType, checkInDate, checkOutDate, price } = order || {};


  if (!order) {
    return <p>No order details available.</p>;
  }

  return (
    <div className="order-confirmed-container">
      <h2>Order Confirmed!</h2>
      <p>Thank you for your booking. Here are the details of your reservation:</p>
      
      <div className="order-details">
        <p><strong>Order ID:</strong> {id}</p>
        <p><strong>Room Type:</strong> {roomType}</p>
      
        <p><strong>Total Price:</strong> ${price}</p>
      </div>

      <p>We look forward to welcoming you!</p>
    </div>
  );
}

export default OrderConfirmed;
