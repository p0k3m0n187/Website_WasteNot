import React, { useEffect } from "react";
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
import image from "../images/steak_sample.png";
import ingredient from "../images/ingredient_sample.png";
import staff from "../images/Staff_sample.png";
import market from "../images/potato.jpg";
import BarGraph from './BarGraph';

export const Homepage = (props) => {

    const graphData = {
        labels: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'],
        values: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
      };

    useEffect(() => {
        function openPopup() {
            document.getElementById('myPopup').style.display = 'block';
            document.querySelector('.backdrop').style.display = 'block';
        }

        function closePopup() {
            document.getElementById('myPopup').style.display = 'none';
            document.querySelector('.backdrop').style.display = 'none';
        }

        const openPopupElement = document.querySelector('.icon-button4');
        const closePopupElement = document.getElementById('close-popup');

        if (openPopupElement) {
            openPopupElement.addEventListener('click', openPopup);
        }

        if (closePopupElement) {
            closePopupElement.addEventListener('click', closePopup);
        }

        return () => {
            if (openPopupElement) {
                openPopupElement.removeEventListener('click', openPopup);
            }

            if (closePopupElement) {
                closePopupElement.removeEventListener('click', closePopup);
            }
        };
    }, []);

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
                <div class="notify-container">
                    <div class="notify1"><img class='sample' src={staff} alt="staff1" /><h3>New Staff Have Been Added!</h3></div>
                    <div class="notify1"><img class='sample' src={image} alt="staff1" /><h3>New Dish has been Added!</h3></div>
                    <div class="notify1"><img class='sample' src={staff} alt="staff1" /><h3>New Staff Have Been Added!</h3></div>
                    <div class="notify1"><img class='sample' src={ingredient} alt="staff1" /><h3>Beef has been Added to Market!</h3></div>
                    <div class="notify1"><img class='sample' src={market} alt="staff1" /><h3>New Ingredient has been Added to Inventory!</h3></div>
                </div>
            </div>

            <div class="scrollable-container">
                <h1>Menu</h1>
                <Link to="/menu"><button class='click'>Click Here!</button></Link>
                <div class='menu-cont'>
                    <div class="item"><img class='sample' src={image} alt="item1" /><h3>Item 1</h3><h4>₱2,500</h4></div>
                    <div class="item"><img class='sample' src={image} alt="item1" /><h3>Item 2</h3><h4>₱2,500</h4></div>
                    <div class="item"><img class='sample' src={image} alt="item1" /><h3>Item 3</h3><h4>₱2,500</h4></div>
                    <div class="item"><img class='sample' src={image} alt="item1" /><h3>Item 4</h3><h4>₱2,500</h4></div>
                    <div class="item"><img class='sample' src={image} alt="item1" /><h3>Item 5</h3><h4>₱2,500</h4></div>
                </div>
                <br />

                <h1>Staff</h1>
                <Link to="/staff"><button class='click'>Click Here!</button></Link>
                <div class='staff-cont'>
                    <div class="item"><img class='sample' src={staff} alt="item1" /><h3>Staff 1</h3></div>
                    <div class="item"><img class='sample' src={staff} alt="item1" /><h3>Staff 2</h3></div>
                    <div class="item"><img class='sample' src={staff} alt="item1" /><h3>Staff 3</h3></div>
                    <div class="item"><img class='sample' src={staff} alt="item1" /><h3>Staff 4</h3></div>
                    <div class="item"><img class='sample' src={staff} alt="item1" /><h3>Staff 5</h3></div>
                </div>
                <br />

                <h1>Market</h1>
                <Link to="/market"><button class='click'>Click Here!</button></Link>
                <div class='market-cont'>
                    <div class="item"><img class='sample' src={ingredient} alt="item1" /><h3>Item 1</h3><h4>₱2,500</h4><h5>Available: 10Kg</h5></div>
                    <div class="item"><img class='sample' src={ingredient} alt="item1" /><h3>Item 2</h3><h4>₱2,500</h4><h5>Available: 10Kg</h5></div>
                    <div class="item"><img class='sample' src={ingredient} alt="item1" /><h3>Item 3</h3><h4>₱2,500</h4><h5>Available: 10Kg</h5></div>
                    <div class="item"><img class='sample' src={ingredient} alt="item1" /><h3>Item 4</h3><h4>₱2,500</h4><h5>Available: 10Kg</h5></div>
                    <div class="item"><img class='sample' src={ingredient} alt="item1" /><h3>Item 5</h3><h4>₱2,500</h4><h5>Available: 10Kg</h5></div>
                </div>
                <br />

                <h1>Ingredients</h1>
                <Link to="/inventory"><button class='click'>Click Here!</button></Link>
                <div class='invent-cont'>
                    <div class="item"><img class='sample' src={market} alt="item1" /><h3>Item 1</h3><h5>Available: 10Kg</h5></div>
                    <div class="item"><img class='sample' src={market} alt="item1" /><h3>Item 2</h3><h5>Available: 10Kg</h5></div>
                    <div class="item"><img class='sample' src={market} alt="item1" /><h3>Item 3</h3><h5>Available: 10Kg</h5></div>
                    <div class="item"><img class='sample' src={market} alt="item1" /><h3>Item 4</h3><h5>Available: 10Kg</h5></div>
                    <div class="item"><img class='sample' src={market} alt="item1" /><h3>Item 5</h3><h5>Available: 10Kg</h5></div>
                </div>
            </div>

            <div className="backdrop" style={{ display: 'none' }}></div>
            <div className="popup" id="myPopup">
                <div className="popup-content">
                    <span className="close" id="close-popup">&times;</span>
                    <BarGraph data={graphData} />
                </div>
            </div>
        </>
    );
};

export default Homepage;