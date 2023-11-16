import React from "react";
import Sidebar from '../components/Sidebar';
import Navbar2 from '../components/NavBar2';
import './Design/menudesign.css';
import image from "../images/steak_sample.png";
import {
    FaWarehouse,
    FaPlusCircle
} from 'react-icons/fa';

export const Menu = (props) => {
    
    return (
        <>
            <Navbar2 />
            <Sidebar />
            <div className="menu-container">
                <div class='menu-title'><h1>Menu</h1></div>
                <div class='total-menu'>
                    <h2>Total Ingredient</h2>
                    <FaWarehouse />
                    <br />
                    <h1>50</h1>
                </div>
                <div><button class='bttn-add'><FaPlusCircle /></button></div>
                <div className="scrollabe-menu">
                    <table class='menu-table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img class='menu-img' src={image} alt="ingredient" /><h2>Product 1</h2></td>
                                <td>Lumpia are fried spring rolls that are found in Filipino and Indonesian cuisines. The rolls traditionally feature a thin pastry skin
                                    (a.k.a. a lumpia wrapper) and are often stuffed with a savory mixture of ground pork and vegetables.</td>
                            </tr>
                            <tr>
                                <td><img class='menu-img' src={image} alt="ingredient" /><h2>Product 1</h2></td>
                                <td>Lumpia are fried spring rolls that are found in Filipino and Indonesian cuisines. The rolls traditionally feature a thin pastry skin
                                    (a.k.a. a lumpia wrapper) and are often stuffed with a savory mixture of ground pork and vegetables.</td>
                            </tr>
                            <tr>
                                <td><img class='menu-img' src={image} alt="ingredient" /><h2>Product 1</h2></td>
                                <td>Lumpia are fried spring rolls that are found in Filipino and Indonesian cuisines. The rolls traditionally feature a thin pastry skin
                                    (a.k.a. a lumpia wrapper) and are often stuffed with a savory mixture of ground pork and vegetables.</td>
                            </tr>
                            <tr>
                                <td><img class='menu-img' src={image} alt="ingredient" /><h2>Product 1</h2></td>
                                <td>Lumpia are fried spring rolls that are found in Filipino and Indonesian cuisines. The rolls traditionally feature a thin pastry skin
                                    (a.k.a. a lumpia wrapper) and are often stuffed with a savory mixture of ground pork and vegetables.</td>
                            </tr>
                            <tr>
                                <td><img class='menu-img' src={image} alt="ingredient" /><h2>Product 1</h2></td>
                                <td>Lumpia are fried spring rolls that are found in Filipino and Indonesian cuisines. The rolls traditionally feature a thin pastry skin
                                    (a.k.a. a lumpia wrapper) and are often stuffed with a savory mixture of ground pork and vegetables.</td>
                            </tr>
                            <tr>
                                <td><img class='menu-img' src={image} alt="ingredient" /><h2>Product 1</h2></td>
                                <td>Lumpia are fried spring rolls that are found in Filipino and Indonesian cuisines. The rolls traditionally feature a thin pastry skin
                                    (a.k.a. a lumpia wrapper) and are often stuffed with a savory mixture of ground pork and vegetables.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
