import React, { useState } from 'react';
import './Checkout.css'; // Import the CSS file for styling

const Checkout = () => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCVC] = useState('');

  const handleCheckout = () => {
    // Add logic to process the checkout
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          placeholder="Enter your card number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />

        <div className="card-details">
          <div>
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              id="expiryDate"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cvc">CVC:</label>
            <input
              type="text"
              id="cvc"
              placeholder="CVC"
              value={cvc}
              onChange={(e) => setCVC(e.target.value)}
            />
          </div>
        </div>

        <button type="button" onClick={handleCheckout}>
          Process Payment
        </button>
      </form>
    </div>
  );
};

export default Checkout;
