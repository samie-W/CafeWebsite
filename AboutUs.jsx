import React, { useState } from 'react';
import "./AboutUs.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';


const AboutUs = () => {
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
        {/* image section */}
        <div className='ImageSection'>
            <div className='overlay'>
                <div className="box">
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you! Whether you have a question about our menu, want to place a special order, or just want to say hello! </p>
                </div>
            </div>
            <img src="/images/contacting.jpg" alt="" />
        </div>

        {/* Htmlform section */}
        <div className='mainform'> 

            <div className='touch'>
                <h2>Get in touch</h2>
                <p>We'd love to hear from you! Whether you have a question about our menu, want to place a special order, or just want to say hello — we're here for you. Drop us a message or visit us anytime. Let’s connect over a cup of coffee!</p>

                <div className='contacticons'>

                        <div className='direction'>
                            <FontAwesomeIcon icon={faFacebook} style={{ color: '#3b5998', cursor: 'pointer', fontSize: "50px" }} />
                       <p>Contact us on facebook </p> 
                        </div>

                         <div className='direction'>
                            <FontAwesomeIcon icon={faGoogle} style={{ color: '#db4a39', cursor: 'pointer', fontSize: "50px" }} />
                       <p>Contact us on facebook </p> 
                        </div>

                     <div className='direction'>
                            <FontAwesomeIcon icon={faTwitter} style={{ color: '#1da1f2', cursor: 'pointer', fontSize: "50px" }} />
                       <p>Contact us on facebook </p> 
                        </div>

                </div>

            <hr />

            </div>

            <div className='detail'>

     <form onSubmit={handleSubmit} >

            <h1 style={{textAlign: "center", margin: "20px"}}>Contact us!</h1>

      <div className='inputstyle'>
        <input 
          type="text" 
          name="firstName" 
          placeholder="First Name" 
          value={formData.firstName}
          onChange={handleChange}
          
          required 
        />
        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          value={formData.lastName}
          onChange={handleChange}
    
          required 
        />
      </div>

      <br />

   
      <div className='inputstyle'>
        <input 
          type="text" 
          name="address" 
          placeholder="Address" 
          value={formData.address}
          onChange={handleChange}
            style={{width: "100%"}}
          required 
        />
      </div>

      <br />

      <div className='inputstyle'>
        <input 
          type="text" 
          name="city" 
          placeholder="City" 
          value={formData.city}
          onChange={handleChange}
    
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
      </div>

      <br />
   
        <button type="submit" className='submitit'>Submit</button>
      
    </form>

            </div>

        </div>

        <div className='map'>
            <img src="/images/compas.jpg" alt="" />
        </div>





    </div>
  )
}


export default AboutUs
