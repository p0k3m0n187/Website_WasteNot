import React, { useState } from 'react';
import './Design/profiledesign.css';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar2 from '../components/NavBar2';

export const Profile = (props) => {
  const initialFormData = {
    restaurantname: '',
    email: '',
    restoAdd: '',
    contactnum: '',
    restoPermit: '',
    password: '',
    confirmPassword: '',
    restocity: '',
    restocode: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isEditable, setIsEditable] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  }

  const handleCancel = () => {
    setFormData(initialFormData);
    setIsEditable(false);
  }


  const toggleEdit = () => {
    setIsEditable(!isEditable);
  }

  const [error, setError] = useState({
    password: '',
    confirmPassword: '',
  })

  const onInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }


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
            stateObj[name] = "Please enter Password.";

          } else if (formData.confirmPassword && value !== formData.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = formData.confirmPassword ? "" : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   Access form data in `formData` and do something with it
  // };

  return (
    <>
      <Navbar2 />
      <Sidebar />
      <div className='profile'>
        <div class="circle2"></div>
        <form>
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
              disabled={!isEditable} // Use !isEditable to conditionally disable the input
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
              disabled={!isEditable} // Use !isEditable to conditionally disable the input
            />
            <br />
            <br />




            {isEditable && (
              <>

                <label>Password</label>
                <br />

                <input
                  type="password"
                  name="password"
                  placeholder='Enter Password'
                  disabled={!isEditable} // Use !isEditable to conditionally disable the input
                  value={formData.password}
                  onChange={onInputChange}
                  onBlur={validateInput}></input><br />
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

            {/* <label>Confirm Password</label>
            <br />

            <input
              type="password"
              name="confirmPassword"
              placeholder='Enter Confirm Password'
              disabled={!isEditable} // Use !isEditable to conditionally disable the input
              value={formData.confirmPassword}
              onChange={onInputChange}
              onBlur={validateInput}></input> */}
          </div>
        </form>
        <div>
          {isEditable ? (
            <>
              <button className="bttnedit" onClick={toggleEdit}>Save</button>
              <button className="bttnedit2" onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <button className="bttnedit" onClick={toggleEdit}>Edit Profile</button>
          )}
        </div>
        <Link to="/login"><button className="Backs">LOG OUT!</button></Link>
      </div>
    </>
  )
}
