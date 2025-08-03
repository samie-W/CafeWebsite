import React, { useState } from 'react';
import CafeData from '../CafeData';
import ProductCard from './ProductCard';
import "./AllProducts.css"
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';



const AllPizza = () => {
  const [categoryFilter, setcategoryFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
      const navigate = useNavigate();
  

  const filteredPizzas = CafeData.filter((item) => {
    const categorymatch = categoryFilter === "All" || item.category === categoryFilter;
    const pricematch =
      priceFilter === "All" ||
      (priceFilter === "Under 1200" && item.basePrice < 1200) ||
      (priceFilter === "Above 1200" && item.basePrice >= 1200);

    return categorymatch && pricematch;
  });

  return (
    <div>

        <div className='coverimgdiv'>
          <img src="/images/bunny.jpg" alt="frameimg" className='coverimg' />
        </div>

      <div className='styleDiv'>


      <div className='types'>
        <div className='childType'>
          <img src="/images/cake1.webp" alt="" />
          <p>Cake</p>
        </div>
        <div className='childType'>
          <img src="/images/biskits.png" alt="" />
          <p>Narm-Narm</p>
        </div>
        <div className='childType'>
          <img src="/images/brownie2.jpg" alt="" />
          <p>Browni</p>
        </div>
        <div className='childType'>
          <img src="/images/type7.jpg" alt="" />
          <p>Coffee</p>
        </div>
        <div className='childType'>
          <img src="/images/reading.jpg" alt="" />
          <p>Chocolate</p>
        </div>

      </div>



      <div className='category'>
        <h2>Pizza List</h2>
      <FontAwesomeIcon icon={faSliders} className="sliders-icon" />

      </div>

    

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {filteredPizzas.length === 0 ? (
          <p>No item found</p>
        ) : (
  
          filteredPizzas.map((item) => <ProductCard key={item.id} item={item} />)

        )}

        </div>

      </div>

    </div>
  );
};

export default AllPizza;
