import React from "react";
import Sidebar from '../components/Sidebar';
import Navbar2 from '../components/NavBar2';
import './Design/homedesign.css';
import {
    FaUsers,
    FaBookOpen,
    FaWarehouse,
    FaChartBar,
    FaChartPie
} from 'react-icons/fa';
import { Link } from "react-router-dom";

export const Homepage = (props) => {

    return (
        <>
            <Navbar2 />
            <Sidebar />
            <div className="container">
                <div>
                    <Link to="/staff"><button class="icon-button">
                        <div className="title"><h4>Total Staff</h4></div>
                        <br />
                        <FaUsers />
                        18
                    </button>
                    </Link>
                    <Link to="/menu"><button class="icon-button2">
                        <div className="title2"><h4>Total Dishes</h4></div>
                        <br />
                        <FaBookOpen />
                        25
                    </button>
                    </Link>
                    <Link to="/inventory"><button class="icon-button3">
                        <div className="title3"><h4>Total Ingredients</h4></div>
                        <br />
                        <FaWarehouse />
                        18
                    </button>
                    </Link>

                    <button class="icon-button4">
                        <div className="title4">
                            <h3>Sales</h3>
                        </div>
                        <br />
                        <FaChartBar />
                    </button>

                    <button class="icon-button5">
                        <div className="title4">
                            <h3>Consumed</h3>
                        </div>
                        <br />
                        <FaChartPie />
                    </button>
                </div>
            </div>

            <div className="notify">
                <h1>Notifications</h1>
                <div class="box-container">

                </div>
            </div>

            <div class="scrollable-container">
                <h1>Menu</h1>
                <div class='menu-cont'>
                    <div class="item">Item 1</div>
                    <div class="item">Item 2</div>
                    <div class="item">Item 3</div>
                </div>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
                <h1>Menu</h1>
            </div>
        </>
    );
};

export default Homepage;