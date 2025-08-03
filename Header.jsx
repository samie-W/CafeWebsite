import React, { useState } from 'react';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGear, faUser,faShoppingCart  } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';



const Header = ({ transparent }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();


  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
  

    <header className={`header ${transparent ? 'transparent-header' : ''}`}>

      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div className="logoText">Cafe_Bites</div>

      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
       <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/products" className="nav-link">Products</Link></li>
          <li><Link to="/cart" className="nav-link">Cart</Link></li>
          <li><Link to="/aboutus" className="nav-link">Contact</Link></li>

        </ul>
      </nav>

      <div className="btn-section">

        <div className="search-container">

          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <FontAwesomeIcon icon={faGear} className="setting-icon" onClick={() => navigate('/privacysetting')} />
          <FontAwesomeIcon icon={faUser} className="user-icon" onClick={() => navigate('/settings')}/>
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" onClick={() => navigate('/cart')}/>

        </div>
          <Link to="/login"><button className="logo-btn">Sign in</button></Link>
        
      </div>
    </header>
  );
};

export default Header;
