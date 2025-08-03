import React from 'react'
import "./HeroSection.css"
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div>
        
        <main className='herosection'>
        <div className='herotext'>
            <h1 className='hero-heading'>Café Noire</h1>
            <h5>Come here to enjoy coffee</h5>
            <p>Savor the aroma of freshly brewed coffee and handcrafted pastries made with love. Every sip with your loved ones and friends!</p>
            <button className='hero-btn' onClick={() => navigate('/allproducts')}>OrderNow</button>

        </div>

        </main>


    </div>
  )
}

export default HeroSection
