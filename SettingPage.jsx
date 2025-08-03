import React from 'react'
import "./SettingPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCar, faBox, faTruck, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



const SettingPage = () => {
    const navigate = useNavigate();

  return (
    <div>
            <div className='maindiv'>

                <div className="menu">

                    <div className='userName'>

                        <div className='imagesection'>
                            <img src="/images/beans1.jpg" alt="" />
                        </div>
                        <div className='userdetail'>
                            <h3>Name</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        </div>
                    </div>

                    <p style={{fontWeight: "bold", padding: "20px", marginTop: "30px"}}>Menu</p>
                    
                    <div className='lists'>
                    <ul>
                       <div className='listsdiv' onClick={() => navigate("/")}>
                            <FontAwesomeIcon icon={faHome} />
                            <li>Home</li>
                       </div>
                       <div className='listsdiv'>
                          <FontAwesomeIcon icon={faCar} />
                            <li>My Orders</li>
                       </div>
                        <div className='listsdiv' onClick={() => navigate("/tracking")}>
                            <FontAwesomeIcon icon={faBox} />
                            <li>Order Tracking</li>
                       </div>
                        <div className='listsdiv' onClick={() => navigate("/cart")}>
                            <FontAwesomeIcon icon={faTruck} />
                            <li>My Cart</li>
                       </div>
                        <div className='listsdiv'>
                            <FontAwesomeIcon icon={faUser} onClick={() => navigate("/settings")}/>
                            <li>My Profile</li>
                        </div>

                    </ul>

                        <div className="allbtn">
                            <button onClick={() => navigate("/edit-profile")}>Edit Profile</button>
                        </div>



                    </div>



                </div>
                <div className="setting">

                    <h1>Account Setting</h1>

                    <div className='settingBox'>

                        
                    <h4>My Profile</h4>

                    <div className="n1">
                
                    <div className='userName'>
                        <div className='imagesection'>
                            <img src="/images/beans1.jpg" alt="" />
                        </div>
                        <div className='userdetail'>
                            <h3>Name</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        </div>
                    </div>

                    </div>



                    <div className='Forminfo'>
                            <div>
                                <h3 className='personal'>Personal Information</h3>


                                <div>
                                    <table style={{display: "flex", flexDirection: "row", margin: "50px"}}>
                            
                            <div className='detailing'>
                                <tr>    
                                <th>Name</th>
                                <td>Samavia</td>
                            </tr>
                            <tr>
                                <th>Age</th>
                                <td>21</td>
                            </tr>
                                 <tr>
                                <th>Gender</th>
                                <td>Female</td>
                            </tr>



                            </div>
                                     <div className='detailing'>
                                <tr>    
                                <th>Email</th>
                                <td>saamaavia@gmail.com</td>
                            </tr>
                            <tr>
                                <th>Contact</th>
                                <td>+891211213</td>
                            </tr>
                                 <tr>
                                <th>City</th>
                                <td>Daska</td>
                            </tr>
                            </div>
                                    </table>


                                </div>

                            </div>

                    </div>


                  


                    </div>


                </div>










            </div>
    </div>
  )
}

export default SettingPage
