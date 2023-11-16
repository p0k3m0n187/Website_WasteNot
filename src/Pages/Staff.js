import React from "react";
import Sidebar from '../components/Sidebar';
import Navbar2 from '../components/NavBar2';
import './Design/staffdesign.css';
import staff from '../images/Staff_sample.png';
import {
    FaPlusCircle,
    FaWarehouse,
    FaSearch,
    FaTrash
} from 'react-icons/fa';

export const Staff = (props) => {
    return (
        <>
            <Navbar2 />
            <Sidebar />
            <div className="staff-container">
                <div class='staff-scrollable'>
                    <div class='staff-title'>Staffs</div>
                    <div class='total-staff'>
                        <h2>Total Ingredient</h2>
                        <br />
                        <FaWarehouse />
                        <h1>50</h1>
                    </div>
                    <div className='search-bar'>
                        <input type="text" placeholder="Search..." />
                        <button><FaSearch /></button>
                    </div>
                    <div><button class='bttn-addstaff'><FaPlusCircle /></button></div>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class='profile'><img class='staff-img' src={staff} alt="ingredient" /></td>
                                <td>
                                    <form class='staff-info'>
                                        <label htmlFor="idNumber">ID Number:</label>
                                        <input type="text" id="idNumber" name="idNumber" placeholder="Sample ID Number" disabled />

                                        <label htmlFor="firstName">First Name:</label>
                                        <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" disabled />

                                        <label htmlFor="lastName">Last Name:</label>
                                        <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" disabled />

                                        <label htmlFor="address">Address:</label>
                                        <input type="text" id="address" name="address" placeholder="Enter Address" disabled />

                                        <label htmlFor="email">Email:</label>
                                        <input type="email" id="email" name="email" placeholder="Enter Email" disabled />
                                    </form>
                                    <button type="button" className="delete-button" disabled><FaTrash /></button>
                                </td>
                            </tr>
                            <tr>
                                <td class='profile'><img class='staff-img' src={staff} alt="ingredient" /></td>
                                <td>
                                    <form class='staff-info'>
                                        <label htmlFor="idNumber">ID Number:</label>
                                        <input type="text" id="idNumber" name="idNumber" placeholder="Sample ID Number" disabled />

                                        <label htmlFor="firstName">First Name:</label>
                                        <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" disabled />

                                        <label htmlFor="lastName">Last Name:</label>
                                        <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" disabled />

                                        <label htmlFor="address">Address:</label>
                                        <input type="text" id="address" name="address" placeholder="Enter Address" disabled />

                                        <label htmlFor="email">Email:</label>
                                        <input type="email" id="email" name="email" placeholder="Enter Email" disabled />
                                    </form>
                                    <button type="button" className="delete-button" disabled><FaTrash /></button>
                                </td>
                            </tr>
                            <tr>
                                <td class='profile'><img class='staff-img' src={staff} alt="ingredient" /></td>
                                <td>
                                    <form class='staff-info'>
                                        <label htmlFor="idNumber">ID Number:</label>
                                        <input type="text" id="idNumber" name="idNumber" placeholder="Sample ID Number" disabled />

                                        <label htmlFor="firstName">First Name:</label>
                                        <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" disabled />

                                        <label htmlFor="lastName">Last Name:</label>
                                        <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" disabled />

                                        <label htmlFor="address">Address:</label>
                                        <input type="text" id="address" name="address" placeholder="Enter Address" disabled />

                                        <label htmlFor="email">Email:</label>
                                        <input type="email" id="email" name="email" placeholder="Enter Email" disabled />
                                    </form>
                                    <button type="button" className="delete-button" disabled><FaTrash /></button>
                                </td>
                            </tr>
                            <tr>
                                <td class='profile'><img class='staff-img' src={staff} alt="ingredient" /></td>
                                <td>
                                    <form class='staff-info'>
                                        <label htmlFor="idNumber">ID Number:</label>
                                        <input type="text" id="idNumber" name="idNumber" placeholder="Sample ID Number" disabled />

                                        <label htmlFor="firstName">First Name:</label>
                                        <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" disabled />

                                        <label htmlFor="lastName">Last Name:</label>
                                        <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" disabled />

                                        <label htmlFor="address">Address:</label>
                                        <input type="text" id="address" name="address" placeholder="Enter Address" disabled />

                                        <label htmlFor="email">Email:</label>
                                        <input type="email" id="email" name="email" placeholder="Enter Email" disabled />
                                    </form>
                                    <button type="button" className="delete-button" disabled><FaTrash /></button>
                                </td>
                            </tr>
                            <tr>
                                <td class='profile'><img class='staff-img' src={staff} alt="ingredient" /></td>
                                <td>
                                    <form class='staff-info'>
                                        <label htmlFor="idNumber">ID Number:</label>
                                        <input type="text" id="idNumber" name="idNumber" placeholder="Sample ID Number" disabled />

                                        <label htmlFor="firstName">First Name:</label>
                                        <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" disabled />

                                        <label htmlFor="lastName">Last Name:</label>
                                        <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" disabled />

                                        <label htmlFor="address">Address:</label>
                                        <input type="text" id="address" name="address" placeholder="Enter Address" disabled />

                                        <label htmlFor="email">Email:</label>
                                        <input type="email" id="email" name="email" placeholder="Enter Email" disabled />
                                    </form>
                                    <button type="button" className="delete-button" disabled><FaTrash /></button>
                                </td>
                            </tr>
                            <tr>
                                <td class='profile'><img class='staff-img' src={staff} alt="ingredient" /></td>
                                <td>
                                    <form class='staff-info'>
                                        <label htmlFor="idNumber">ID Number:</label>
                                        <input type="text" id="idNumber" name="idNumber" placeholder="Sample ID Number" disabled />

                                        <label htmlFor="firstName">First Name:</label>
                                        <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" disabled />

                                        <label htmlFor="lastName">Last Name:</label>
                                        <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" disabled />

                                        <label htmlFor="address">Address:</label>
                                        <input type="text" id="address" name="address" placeholder="Enter Address" disabled />

                                        <label htmlFor="email">Email:</label>
                                        <input type="email" id="email" name="email" placeholder="Enter Email" disabled />
                                    </form>
                                    <button type="button" className="delete-button" disabled><FaTrash /></button>
                                </td>
                            </tr>
                            <tr>
                                <td class='profile'><img class='staff-img' src={staff} alt="ingredient" /></td>
                                <td>
                                    <form class='staff-info'>
                                        <label htmlFor="idNumber">ID Number:</label>
                                        <input type="text" id="idNumber" name="idNumber" placeholder="Sample ID Number" disabled />

                                        <label htmlFor="firstName">First Name:</label>
                                        <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" disabled />

                                        <label htmlFor="lastName">Last Name:</label>
                                        <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" disabled />

                                        <label htmlFor="address">Address:</label>
                                        <input type="text" id="address" name="address" placeholder="Enter Address" disabled />

                                        <label htmlFor="email">Email:</label>
                                        <input type="email" id="email" name="email" placeholder="Enter Email" disabled />
                                    </form>
                                    <button type="button" className="delete-button" disabled><FaTrash /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
