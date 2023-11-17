import React from "react";
import Navbar2 from '../components/NavBar2';
import './Design/addstaffdesign.css';
import { Link } from "react-router-dom";

export const AddStaff = (props) => {
    return (
        <>
            <Navbar2 />
            <div className="addstaff-container">
                <div class='scrollable-addstaff'>
                    <div class='thead'>Information</div>
                    <div class='tbody'>
                        <form className='addstaff-info'>
                            <div class='form1'>
                                <label htmlFor="idNumber">ID Number:</label>
                                <input type="text" id="idNumber" name="idNumber" placeholder="Sample ID Number" />

                                <label htmlFor="firstName">First Name:</label>
                                <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" />

                                <label htmlFor="lastName">Last Name:</label>
                                <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" />

                                <label htmlFor="gender">Gender:</label>
                                <select id="gender" name="gender">
                                    <option value="" disabled selected>Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>

                                <br />

                                <label htmlFor="address">Street Address:</label>
                                <input type="text" id="straddress" name="streetaddress" placeholder="Enter Street Address" />

                            </div>

                            <div class='form2'>

                                <label htmlFor="address">City Address:</label>
                                <input type="text" id="cityaddress" name="cityaddress" placeholder="Enter City Address" />

                                <label htmlFor="address">Zip Code:</label>
                                <input type="number" id="zipcode" name="zipcode" placeholder="Enter Zip Code" />

                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" placeholder="Enter Email" />

                                <label htmlFor="gender">Position:</label>
                                <select id="position" name="position">
                                    <option value="" disabled selected>Select Position</option>
                                    <option value="male">Head Staff</option>
                                    <option value="female">Staff</option>
                                    <option value="female">Manager</option>
                                </select>
                            </div>
                        </form>
                            <Link to="/staff"><button class='bttn-confirm'>Confirm</button></Link>
                            <Link to="/staff"><button class='bttn-cancel'>Cancel</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};