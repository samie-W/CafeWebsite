import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (

    <div>


        <footer>
               <div class="container">

            <div class="logo">
                <div class="logoimg">
                    <img src="/images/a (1).png" alt="bacha" />
                    <label>Cafe-Bites.</label>
            </div>

                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicingbr elit. Distinctio, iste.</p>

                <div style={{ display: 'flex', justifyContent: "left", marginTop: "10px", gap: '20px', fontSize: '24px' }}>
                         <FontAwesomeIcon icon={faFacebook} style={{ color: '#3b5998', cursor: 'pointer' }} />
                        <FontAwesomeIcon icon={faGoogle} style={{ color: '#db4a39', cursor: 'pointer' }} />
                         <FontAwesomeIcon icon={faTwitter} style={{ color: '#1da1f2', cursor: 'pointer' }} />
                 </div>
                

            </div>

            <div class="home">
                <label>Home</label>
                <ul>
                    <li>Daska, Punjab</li>
                    <li>Chungi # 8</li>
                    <li>House no A-11</li>
                    <li>Floor3, Room no 4</li>
                </ul>
            </div>


            <div class="feedback">
                <label>Feedback us</label>
                <ul>
                    <li>Nothing Nice</li>
                    <li>Tring to Learn</li>
                    <li>Footer styling First</li>
                    <li>Have no experience yet!</li>
                </ul>
            </div>


            <div class="about">
                <label>About Us</label>
                <ul>
                    <li>Good</li>
                    <li>Intelligence</li>
                    <li>Attractive</li>
                    <li>Do Nothing</li>
                </ul>
            </div>



        </div>

        <div class="end">
            <label >Nothing to Do Exited</label>
            <label >Agin Boring University Routine</label>
        </div>

        </footer>
    </div>
  )
}

export default Footer
