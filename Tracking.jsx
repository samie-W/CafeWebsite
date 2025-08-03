import React, { useState } from 'react';
import CafeData from '../CafeData';
import './Tracking.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruck,
  faCreditCard,
  faHeadset,
  faCircleCheck,
  faClock,
  faTruckFast,
  faBoxOpen
} from '@fortawesome/free-solid-svg-icons';


const TrackOrder = () => {
  const [cartItems, setCartItems] = useState([
    { ...CafeData[0], quantity: 4 },
    { ...CafeData[4], quantity: 2 },
    { ...CafeData[7], quantity: 1 },
    { ...CafeData[8], quantity: 2 },
  ]);

  return (
    <>
      <div className='coverimgdiv'>
        <img src="/images/bunny.jpg" alt="frameimg" className='coverimg' />
      </div>

      <div className="styleDiv">
        <div className="track-wrapper">

          <div className="track-status-section">
            <p className="order-id">Order ID : #SDGT1254FD</p>
            <div className="status-steps">
              <div className="step completed">
                <FontAwesomeIcon icon={faCircleCheck} className="step-icon" />
                <p className="step-title">Order Placed</p>
                <p className="step-date">20 Apr 2024<br />11:00 AM</p>
              </div>
              <div className="step completed">
                <FontAwesomeIcon icon={faCircleCheck} className="step-icon" />
                <p className="step-title">Accepted</p>
                <p className="step-date">20 Apr 2024<br />11:15 AM</p>
              </div>
              <div className="step">
                <FontAwesomeIcon icon={faClock} className="step-icon" />
                <p className="step-title">In Progress</p>
                <p className="step-date">Expected<br />21 Apr 2024</p>
              </div>
              <div className="step">
                <FontAwesomeIcon icon={faTruckFast} className="step-icon" />
                <p className="step-title">On the Way</p>
                <p className="step-date">Expected<br />22, 23 Apr</p>
              </div>
              <div className="step">
                <FontAwesomeIcon icon={faBoxOpen} className="step-icon" />
                <p className="step-title">Delivered</p>
                <p className="step-date">Expected<br />24 Apr 2024</p>
              </div>
            </div>
          </div>

          <div className="track-products">
            <h3 className="products-heading">Products</h3>
            <ul className="product-list">
              {cartItems.map((item, idx) => (
                <li className="product-item" key={item.id}>
                  <img src={`/images/${item.image}`} alt={item.name} />
                  <div className="product-details">
                    <p><strong>{item.name}</strong></p>
                    <p>Category: {item.category || 'N/A'} | {item.quantity} Qty.</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="track-features">
            <div className="feature-box">
              <FontAwesomeIcon icon={faTruck} size="2x" className="icon" />
              <p><strong>Free Shipping</strong><br />Free shipping for order above $180</p>
            </div>
            <div className="feature-box">
              <FontAwesomeIcon icon={faCreditCard} size="2x" className="icon" />
              <p><strong>Flexible Payment</strong><br />Multiple secure payment options</p>
            </div>
            <div className="feature-box">
              <FontAwesomeIcon icon={faHeadset} size="2x" className="icon" />
              <p><strong>24×7 Support</strong><br />We support online all days.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackOrder;
