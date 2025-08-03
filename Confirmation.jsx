import React from 'react';
import './Confirmation.css';
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const navigate = useNavigate();

  const handleTrackOrder = () => {
    navigate('/tracking');
  };

  return (
    <div className="confirm-wrapper">
      <div className="confirm-box">
        <h2 className="heading">Thank you for your order!</h2>
        <p className="subtext">Your order has been placed successfully.</p>

        <div className="order-summary">
          <div className="summary-row">
            <span>Order Number:</span>
            <span>#SDGT1254FD</span>
          </div>
          <div className="summary-row">
            <span>Payment Status:</span>
            <span>Success</span>
          </div>
          <div className="summary-row">
            <span>Delivery Method:</span>
            <span>Standard Shipping</span>
          </div>
        </div>

        <div className="actions">
          <button className="track-btn" onClick={handleTrackOrder}>Track My Order</button>
          <button className="continue-btn" onClick={() => navigate('/')}>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
