import React, { useState } from 'react';
import './Payment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState('visa');
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      <div className='coverimgdiv'>
        <img src="/images/bunny.jpg" alt="frameimg" className='coverimg' />
      </div>
      <div className="styleDiv">
        <div className="payment-container">
          <div className="payment-form">
            <h3 className="section-heading">Delivery Information</h3>
            <div className="input-box">
              <label><FontAwesomeIcon icon={faUser} /> Name</label>
              <input type="text" name="name" value={userData.name} onChange={handleInputChange} placeholder="Enter your name" />
            </div>
            <div className="input-box">
              <label><FontAwesomeIcon icon={faEnvelope} /> Email</label>
              <input type="email" name="email" value={userData.email} onChange={handleInputChange} placeholder="Enter your email" />
            </div>
            <div className="input-box">
              <label><FontAwesomeIcon icon={faPhone} /> Phone</label>
              <input type="text" name="phone" value={userData.phone} onChange={handleInputChange} placeholder="Enter your phone number" />
            </div>
            <div className="input-box">
              <label><FontAwesomeIcon icon={faMapMarkerAlt} /> Address</label>
              <input type="text" name="address" value={userData.address} onChange={handleInputChange} placeholder="Enter your address" />
            </div>

            <h3 className="section-heading">Select Payment Method</h3>
            <div className="payment-methods">
              <label>
                <input type="radio" name="method" value="visa" checked={selectedMethod === 'visa'} onChange={() => handleMethodChange('visa')} />
                <img src="/images/visa.png" alt="Visa" /> Debit Card
              </label>
              <label>
                <input type="radio" name="method" value="mastercard" checked={selectedMethod === 'mastercard'} onChange={() => handleMethodChange('mastercard')} />
                <img src="/images/mastercard.png" alt="MasterCard" /> Credit card
              </label>
              <label>
                <input type="radio" name="method" value="debit" checked={selectedMethod === 'debit'} onChange={() => handleMethodChange('debit')} />
                <img src="/images/Wallet.png" alt="Debit" /> Wallet
              </label>
              <label>
                <input type="radio" name="method" value="cod" checked={selectedMethod === 'cod'} onChange={() => handleMethodChange('cod')} />
                <img src="/images/COD.png" alt="COD" /> Cash on Delivery
              </label>
            </div>

            <div className="payment-summary">
              {/* <h4>Total:</h4> */}
              <p className="total-amount">Total: $299.00</p>
              <Link to="/confirmation">
              <button className="pay-btn">Pay Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
