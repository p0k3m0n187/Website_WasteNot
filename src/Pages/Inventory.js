import React from "react";
import Sidebar from '../components/Sidebar';
import Navbar2 from '../components/NavBar2';

export const Inventory = (props) => {
    return (
        <div>
            <Navbar2 />
            <Sidebar />
            <h1>This is Inventory!</h1>
        </div>
    );
};
