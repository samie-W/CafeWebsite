import React, { useState } from 'react';
import CafeData from '../CafeData';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faCreditCard, faHeadset, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { ...CafeData[0], quantity: 4 },
    { ...CafeData[4], quantity: 2 },
    { ...CafeData[7], quantity: 1 },
    { ...CafeData[8], quantity: 2 },
  ]);
  const [coupon, setCoupon] = useState('');

  const increment = (index) => {
    const updated = [...cartItems];
    updated[index].quantity += 1;
    setCartItems(updated);
  };

  const decrement = (index) => {
    const updated = [...cartItems];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
      setCartItems(updated);
    }
  };

  const removeItem = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getSubtotal = () =>
    cartItems.reduce((acc, item) => acc + item.basePrice * item.quantity, 0);

  return (
    <>
    <div className='coverimgdiv'>
          <img src="/images/bunny.jpg" alt="frameimg" className='coverimg' />
        </div>
 <div className='styleDiv'>
    <div className="cart-page">
      <div className="cart-header">
      </div>

      <div className="cart-container">
        <div className="cart-items-section">
          <table className="cart-table">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => (
                <tr key={item.id}>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => removeItem(idx)}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </td>
                  <td>
                    <div className="product-info">
                      <img src={`/images/${item.image}`} alt={item.name} />
                      <div>
                        <p>{item.name}</p>
                        <small>Category: {item.category || 'N/A'}</small>
                      </div>
                    </div>
                  </td>
                  <td>${item.basePrice}</td>
                  <td>
                    <div className="quantity-box">
                      <button onClick={() => decrement(idx)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increment(idx)}>+</button>
                    </div>
                  </td>
                  <td>${item.basePrice * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-controls">
            <input
              type="text"
              placeholder="Coupon Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="coupon-input"
            />
            <button className="apply-coupon-btn">Apply Coupon</button>
            <button className="clear-cart-btn" onClick={clearCart}>Clear Shopping Cart</button>
          </div>
        </div>

        <div className="summary-box">
          <h3>Order Summary</h3>
          <div className="summary-line">
            <span>Items:</span> <span>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
          </div>
          <div className="summary-line">
            <span>Sub Total:</span> <span>${getSubtotal()}</span>
          </div>
          <div className="summary-line">
            <span>Shipping:</span> <span>$0.00</span>
          </div>
          <div className="summary-line">
            <span>Taxes:</span> <span>$0.00</span>
          </div>
          <div className="summary-line">
            <span>Coupon Discount:</span> <span>-$100.00</span>
          </div>
          <div className="summary-total">
            <span>Total:</span> <span>${getSubtotal() - 100}</span>
          </div>
          <Link to="/payment">
          <button className="checkout-btn">Proceed to Checkout</button>
          </Link>
        </div>
      </div>

      <div className="features-section">
        <div className="feature">
          <FontAwesomeIcon icon={faTruck} size="2x" className="icon" />
          <h6>Free Shipping</h6>
          <small>Free shipping for order above $180</small>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faCreditCard} size="2x" className="icon" />
          <h6>Flexible Payment</h6>
          <small>Multiple secure payment options</small>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faHeadset} size="2x" className="icon" />
          <h6>24×7 Support</h6>
          <small>We support online all days</small>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Cart;
