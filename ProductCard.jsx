import React, { useState } from "react";
import "./ProductCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
   const navigate = useNavigate();

    const handleClick = () => {
    navigate(`/ProductView/${item.id}`);
  };

  const [quantity, setQuantity] = useState(1);

      const increase = () => setQuantity(prev => prev + 1);
      const decrease = () => {
        if (quantity > 1) setQuantity(prev => prev - 1);

      };


  const [size, setSize] = useState("Small"); 
  // const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  const setPrice = {
    Small: item.basePrice,
    Medium: item.basePrice + 200,
    Large: item.basePrice + 400,
  };

  const totalPrice = setPrice[size] * quantity;

  const handleAddtoCart = (e) => {
  e.stopPropagation();  
  setShowPopup(true);
};

    const handleClosePopup = () => {
        setShowPopup(false);
    };

  return (

    <div className="card" onClick={handleClick} style={{cursor: "pointer"}} >

  
         <img src={`/images/${item.image}`} alt={item.name}  className="cardimg" />
        <h3 style={{textAlign: "center", padding: "10px"}}>{item.name}</h3>
        <p style={{fontWeight: "bolder", textAlign: "center"}}>PKR: {setPrice[size]}</p>

       <button onClick={handleAddtoCart} className="cartbtn">

        Add to Cart
        </button>
      <FontAwesomeIcon icon={faHeart} className="heart-icon" />


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
            <img src={`/images/${item.image}`} alt="item.name" width="100%" height="200" borderRadius="25px"  />
            <p>Name: {item.name}</p>
    
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

export default ProductCard;
