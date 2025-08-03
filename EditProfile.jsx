import React, { useState } from 'react';
import './EditProfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


const EditProfile = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();


  const handleSave = (e) => {
    e.preventDefault();
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    

    <div className="edit-profile-container d-flex justify-content-center align-items-center" 
         style={{
            backgroundImage: "url('/images/choco.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            minHeight: "100vh",
            // padding: "50px"
  }}
    >
    
      <div className="edit-profile-card shadow-lg p-4 animate-fade-in">



        {showSuccess && (
          <div className="alert alert-success animate-fade-in text-center" role="alert">
             Your profile has been updated successfully.
          </div>
        )}

        <form onSubmit={handleSave} className='forming'>
          
                    <h3 className="text-center text-brown mb-4" >Edit Profile</h3>

          
          <div className="mb-3">
            <label className="form-label text-brown">Full Name</label>
            <input type="text" className="form-control" placeholder="Zayan Khan" />
          </div>

          <div className="mb-3">
            <label className="form-label text-brown">Email</label>
            <input type="email" className="form-control" placeholder="zayan@example.com" />
          </div>

          <div className="mb-3">
            <label className="form-label text-brown">Phone</label>
            <input type="text" className="form-control" placeholder="+92 300 1234567" />
          </div>

          <div className="mb-3">
            <label className="form-label text-brown">Location</label>
            <input type="text" className="form-control" placeholder="Lahore, Pakistan" />
          </div>

          <div className="mb-3">
            <label className="form-label text-brown">Favorite Drink</label>
            <input type="text" className="form-control" placeholder="Cappuccino" />
          </div>

          <div className="text-center mt-4">
            <button type="button" className="btn btn-outline-brown me-2"  onClick={() => navigate(-1)}>Cancel</button>

            <button type="submit" className="btn btn-brown">Save Changes</button>
          </div>
        </form>

       
      </div>
    </div>
 
  );
};

export default EditProfile;
