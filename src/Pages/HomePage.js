import React from "react";
import Sidebar from '../components/Sidebar';
import Navbar2 from '../components/NavBar2';

export const Homepage = (props) => {
    return (
        <div>
            <Navbar2 />
            <Sidebar />
            <h1>Homepage!</h1>
        </div>
    );
};
