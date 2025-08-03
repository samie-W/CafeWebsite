import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CafeData from '../CafeData';
import './ProductView.css';

const ProductView = () => {
  const { id } = useParams();
  const product = CafeData.find((item) => item.id === parseInt(id));

 

const [showPopup, setShowPopup] = useState(false);
  const [size, setSize] = useState("medium");
  const [quantity, setQuantity] = useState(1);

     const handleAddtoCart = () => {
        setShowPopup(true);
    }

    const handleClosePopup = () => {
        setShowPopup(false);
    };



       if (!product) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h2>Product Not Found 😢</h2>
        <p>The item you are looking for doesn't exist.</p>
      </div>
    );
  }


  const price = parseInt(product.basePrice); // you can add different size prices later
  const totalPrice = price * quantity;

  return (
    <div className="productview-container">
      <div className="productview-image">
        <img src={`/images/${product.image}`} alt={product.name} />
      </div>

      <div className="productview-details">
        <h2>{product.name}</h2>
        <p className="desc">{product.category} | Freshly made</p>

        <div className="selector">
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>

        <h4>Price per piece: Rs. {price}</h4>
        <h3>Total Price: Rs. {totalPrice}</h3>

        <div className="btn-group">
          <button className="add-btn" onClick={handleAddtoCart}>Add to Cart</button>
          <button className="buy-btn">Buy Now</button>
        </div>


    




      </div>
     {showPopup && (

        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,


        }}>

            <div style={{background: "white", padding: 30,borderRadius: 10, width: "400px", textAlign: "center"}}>
            <h2>Item added to Cart!</h2>
            <img src={`/images/${product.image}`} alt="product.name" width="100%" height="200" borderRadius="25px"  />
            <p>Name: {product.name}</p>
    
            {/* <p>Quantity{quantity} </p> */}
            <p>Total price is: {totalPrice}</p>
        <br />

        <button onClick={handleClosePopup} className="cartingbtn">Ok</button>
        </div>
       


        </div>


    )  }
      
    </div>
  );
};

export default ProductView;
