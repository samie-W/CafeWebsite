import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

 
const Login = () => {

   const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };



  return (
    <div className="login-container">

      <div className="login-left">
        <img src="/images/Chocolate-Cake.jpg" alt="Cake" className="login-image" />
        <div className="login-overlay">
          <h1>Welcome Back!</h1>
          <p>Enjoy sweet moments with every bite.</p>
        </div>
      </div>

 
      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={() => navigate('/allproducts')}>Login</button>

            <p className='other'>or login with </p>
            
             <div style={{ display: 'flex', justifyContent: "center", marginTop: "10px", gap: '20px', fontSize: '24px' }}>
                     <FontAwesomeIcon icon={faFacebook} style={{ color: '#3b5998', cursor: 'pointer' }} />
                     <FontAwesomeIcon icon={faGoogle} style={{ color: '#db4a39', cursor: 'pointer' }} />
                      <FontAwesomeIcon icon={faTwitter} style={{ color: '#1da1f2', cursor: 'pointer' }} />
             </div>

        </form>
      </div>
    </div>
  );
};

export default Login;
