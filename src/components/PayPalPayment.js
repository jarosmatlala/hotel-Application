// PayPalPayment.js
import React from 'react';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PayPalPayment = ({ totalAmount, onApprove }) => {
    const createOrder = async (data, actions) => {
        if (parseFloat(totalAmount) <= 0) {
            console.error("The total amount must be greater than zero");
            return; // Prevent order creation
        }

        return actions.order.create({
            purchase_units: [{
                amount: {
                    currency_code: "USD",
                    value: totalAmount,
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

    return (
        <PayPalScriptProvider options={{ clientId: "YOUR_CLIENT_ID" }}>
            <PayPalButtons
                createOrder={createOrder}
                onApprove={onApprove}
            />
        </PayPalScriptProvider>
    );
};

export default PayPalPayment;
