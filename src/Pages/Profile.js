import React, { useState } from 'react';
import './Design/profiledesign.css';
// import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar2 from '../components/NavBar2';
import {
  FaPlusCircle
} from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

export const Profile = (props) => {

  const history = useNavigate()

  const handleClick = () =>{
    signOut(auth).then(val=>{
      console.log(val,"val")
      history('/')
    })
  }

  const initialFormData = {
    restaurantname: '',
    email: '',
    restoAdd: '',
    contactnum: '',
    restoPermit: '',
    password: '',
    confirmPassword: '',
    restocity: '',
    restocode: '',
    restodescrip: '',
    selectedImage: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isEditable, setIsEditable] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  const toggleChangePassword = () => {
    setShowChangePassword(!showChangePassword);
  };


  const handleCancel = () => {
    setFormData(initialFormData);
    setIsEditable(false);
  }


  const toggleEdit = () => {
    setIsEditable(!isEditable);
  }

  const onInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }

  const [error, setError] = useState({
    password: '',
    confirmPassword: '',
  })



  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    // Update formData with the selected image
    setFormData({
      ...formData,
      selectedImage: URL.createObjectURL(file), // Assuming you want to display the image
    });
  };

  const handleSelectImageClick = () => {
    // Trigger the file input when the "Select Image" button is clicked
    document.getElementById('profileImage').click();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "password":
          if (!value) {
            stateObj[name] = "Please enter new Password.";

          } else if (formData.confirmPassword && value !== formData.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = formData.confirmPassword ? "" : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm new Password.";
          } else if (formData.password && value !== formData.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };


  return (
    <>
      <Navbar2 />
      <Sidebar />
      <div className='profile'>
        <form>
          {/* Image holder (clickable) */}
          <img
            src={formData.selectedImage}
            alt=""
            className="profile-image"
            onClick={isEditable ? handleSelectImageClick : undefined}
          />

          {/* File input */}
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            name="profileImage"
            onChange={handleImageUpload}
            disabled={!isEditable}
            style={{ display: 'none' }}
          />
          {isEditable && (
            <button
              type="button"
              className="btn-select-image"
              onClick={handleSelectImageClick}
            >
              <FaPlusCircle />
            </button>
          )}

          <div className='form-prof'>
            <label>Resturant Name</label>
            <br />
            <input
              type="text"
              name="restaurantname"
              value={formData.restaurantname}
              onChange={onInputChange}
              placeholder="Restaurant Name Sample"
              disabled={!isEditable} // Use !isEditable to conditionally disable the input
            />
            <br />
            <br />

            <label>Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onInputChange}
              placeholder="Sample Email"
              disabled={true} // Use !isEditable to conditionally disable the input
            // disabled={someCondition ? true : false} // Disable based on someCondition
            />
            <br />
            <br />

            <label>Restaurant Street Address</label>
            <br />
            <input
              type="text"
              name="restoAdd"
              value={formData.restoAdd}
              onChange={handleInputChange}
              placeholder="Restaurant Street Sample"
              disabled={!isEditable} // Use !isEditable to conditionally disable the input
            />
            <br />
            <br />

            <label>Restaurant City</label>
            <br />

            <input
              type="text"
              name="restocity"
              value={formData.restocity}
              onChange={handleInputChange}
              placeholder="Restaurant City Sample"
              disabled={!isEditable} // Use !isEditable to conditionally disable the input
            />
            <br />
            <br />

            <label>Zip Code</label>
            <br />

            <input
              type="number"
              name="restocode"
              value={formData.restocode}
              onChange={handleInputChange}
              placeholder="Restaurant Zip Code Sample"
              disabled={!isEditable} // Use !isEditable to conditionally disable the input
            />
          </div>


          <div className='form-prof2'>

            <label>Restaurant Permit Number</label>
            <br />

            <input
              type="number"
              name="restoPermit"
              value={formData.restoPermit}
              onChange={handleInputChange}
              placeholder="Sample Restaurant Permit"
              disabled={true} // Use !isEditable to conditionally disable the input
            />
            <br />
            <br />


            <label>Restaurant Description</label>
            <br />

            <div className='description'><input
              type="text"
              name="restodescrip"
              value={formData.restodescrip}
              onChange={handleInputChange}
              placeholder="Sample Restaurant Description"
              disabled={!isEditable} // Use !isEditable to conditionally disable the input
            />
            </div>
            <br />

            {showChangePassword && isEditable && (
              <>
                <label>Password</label>
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder='Enter Password'
                  disabled={!isEditable}
                  value={formData.password}
                  onChange={onInputChange}
                  onBlur={validateInput}
                />
                <br />
                {error.password && <span className='err'>{error.password}</span>}
                <br />
                <br />
                <label>Confirm Password</label>
                <br />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder='Enter Confirm Password'
                  disabled={!isEditable}
                  value={formData.confirmPassword}
                  onChange={onInputChange}
                  onBlur={validateInput}
                />
                {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
              </>
            )}

          </div>
        </form>
      </div>
      <div>
        {isEditable ? (
          <>
            <button className="bttnsave" onClick={toggleEdit}>Save</button>
            <button className="bttnedit2" onClick={handleCancel}>Cancel</button>
            <button className="bttnchapass" onClick={toggleChangePassword}>Change Password</button>
          </>
        ) : (
          <>
            <button className="bttnedit" onClick={toggleEdit}>Edit Profile</button>
            {/* <Link to="/login"><button className="Backs">LOG OUT</button></Link> */}
            <button onClick={handleClick} className="Backs">LOG OUT</button>
            <button className="bttndeact">DEACTIVATE</button>
          </>
        )}
      </div>
    </>
  )
}
