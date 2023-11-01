import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Design/registerdesign.css';
import { Link } from 'react-router-dom';

export const Register = (props) => {

  const [input, setInput] = useState({
    restaurantname: '',
    email: '',
    restoAdd: '',
    contactnum: '',
    restoPermit: '',
    password: '',
    confirmPassword: '',
    restocity: '',
    restocode: ''
  });

  const [error, setError] = useState({
    restaurantname: '',
    email: '',
    restoAdd: '',
    contactnum: '',
    restoPermit: '',
    password: '',
    confirmPassword: '',
    estocity: '',
    restocode: ''
  })

  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }

  const [selectedImage, setSelectedImage] = useState(null);

  const [selectedImageName, setSelectedImageName] = useState('');
  const [selectedImageName2, setSelectedImageName2] = useState('');

  // Add this function to handle image change
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setSelectedImage(file);
  // }

  const [, setSelectedImage2] = useState(null);

  // Add this function to handle image change
  // const handleImageChange2 = (e) => {
  //   const file = e.target.files[0];
  //   setSelectedImage2(file);
  // }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setSelectedImageName(file ? file.name : ''); // Update selected image name
  }

  const handleImageChange2 = (e) => {
    const file = e.target.files[0];
    setSelectedImage2(file);
    setSelectedImageName2(file ? file.name : ''); // Update selected image name
  }


  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "restaurantname":
          if (!value) {
            stateObj[name] = "Please enter Restaurant Name.";
          }
          break;

        case "email":
          if (!value) {
            stateObj[name] = "Please enter Email.";
          }
          break;

        case "restoAdd":
          if (!value) {
            stateObj[name] = "Please enter Restaurant Address.";
          }
          break;

        case "contactnum":
          if (!value) {
            stateObj[name] = "Please enter Contact Number.";
          }
          break;

        case "restoPermit":
          if (!value) {
            stateObj[name] = "Please enter Restaurant Permit.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";

          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        case "restocity":
          if (!value) {
            stateObj[name] = "Please enter Restaurant City.";
          }
          break;
        case "restocode":
          if (!value) {
            stateObj[name] = "Please enter Zip Code.";
          }
          break;



        default:
          break;
      }

      return stateObj;
    });
  }

  return (
    <>
      <Navbar />

      <div class="header ">Registration</div>
      <div className="form-group">
        {/* <label htmlFor="image">Select Restaurant Image</label>
        <input
          type="file"
          className="form-group"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
        /> */}
        <label htmlFor="image">Select Restaurant Image</label>
        <br />
        <br />
        <input
          type="file"
          accept="image/*"
          id="restaurantPermitImageButton2"
          className="file-upload-input"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <label htmlFor="restaurantPermitImageButton2" className="file-upload-button2">
          {selectedImageName || "No Files Chosen"}
        </label>
      </div>

      <div className="image-holder">
        <div className="circle"></div>
        {selectedImage && (
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
        )}
      </div>
      <div className="app1">
        <form>
          <label>Restaurant Name</label>
          <br />
          <input
            type="text"
            name="restaurantname"
            placeholder='Enter Restaurant Name'
            style={{ width: "23vw", height: "2vw" }}
            value={input.restaurantname}
            onChange={onInputChange}
            onBlur={validateInput}></input><br />
          {error.restaurantname && <span className='err'>{error.restaurantname}</span>}
          <br />

          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder='Enter Email'
            style={{ width: "23vw", height: "2vw" }}
            value={input.email}
            onChange={onInputChange}
            onBlur={validateInput}></input><br />
          {error.email && <span className='err'>{error.email}</span>}
          <br />

          <label>Restaurant Street Address</label>
          <br />
          <input
            type="text"
            name="restoAdd"
            placeholder='Enter Resturant Street Address'
            style={{ width: "23vw", height: "2vw" }}
            value={input.restoAdd}
            onChange={onInputChange}
            onBlur={validateInput}></input><br />
          {error.restoAdd && <span className='err'>{error.restoAdd}</span>}
          <br />

          <label>Restaurant City</label>
          <br />
          <input
            type="text"
            name="restocity"
            placeholder='Enter Resturant Street Address'
            style={{ width: "23vw", height: "2vw" }}
            value={input.restocity}
            onChange={onInputChange}
            onBlur={validateInput}></input><br />
          {error.restocity && <span className='err'>{error.restocity}</span>}
          <br />

          <label>Contact Number</label>
          <br />
          <input
            type="number"
            name="contactnum"
            placeholder='Enter Contact Number'
            style={{ width: "23vw", height: "2vw" }}
            value={input.contactnum}
            onChange={onInputChange}
            onBlur={validateInput}></input><br />
          {error.contactnum && <span className='err'>{error.contactnum}</span>}
          <br />
          {/* <button class="Back" onClick={() => props.onFormSwitch('Home')}>Cancel</button> */}
          <Link to="/login"><button class="Back">Back</button></Link>
        </form>
      </div>

      <div className='app2'>
        <form>
          <label>Restaurant Permit Number</label>
          <br />
          <input
            type="text"
            name="restoPermit"
            placeholder='Enter Restaurant Permit Number'
            style={{ width: "23vw", height: "2vw" }}
            value={input.restoPermit}
            onChange={onInputChange}
            onBlur={validateInput}></input><br />
          {error.restoPermit && <span className='err'>{error.restoPermit}</span>}
          <br />
          <label>Select Restaurant Permit Image</label>
          {/* <br />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange2}
            style={{ width: "23vw", height: "2vw" }}
          />
          <br />
          <br />

          <label htmlFor="restaurantPermitImageButton" className="file-upload-button">
            Select Restaurant Permit Image
          </label> */}

          <input
            type="file"
            accept="image/*"
            id="restaurantPermitImageButton"
            className="file-upload-input"
            onChange={handleImageChange2}
            style={{ display: "none" }}
          />
          <br />
          <label htmlFor="restaurantPermitImageButton" className="file-upload-button">
            {selectedImageName2 || "No Files Chosen"}
          </label>
          <br />
          <br />

          <label>Zip Code</label>
          <br />
          <input
            type="number"
            name="restocode"
            placeholder='Enter Zip Code'
            style={{ width: "23vw", height: "2vw" }}
            value={input.restocode}
            onChange={onInputChange}
            onBlur={validateInput}></input><br />
          {error.restocode && <span className='err'>{error.restocode}</span>}
          <br />

          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder='Enter Password'
            style={{ width: "23vw", height: "2vw" }}
            value={input.password}
            onChange={onInputChange}
            onBlur={validateInput}></input><br />
          {error.password && <span className='err'>{error.password}</span>}
          <br />

          <label>Confirm Password</label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            placeholder='Enter Confirm Password'
            style={{ width: "23vw", height: "2vw" }}
            value={input.confirmPassword}
            onChange={onInputChange}
            onBlur={validateInput}></input><br />
          {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
          <br />
          {/* <button class="Register" onClick={() => props.onFormSwitch('Home')}>Register</button> */}
          <Link to="/login"><button class="Register">Register</button></Link>
        </form>
      </div>
    </>
  )
}