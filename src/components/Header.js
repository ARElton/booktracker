import React from "react";
import { NavLink } from 'react-router-dom';

function Header () {

    return (
        <header>
            <h1>BookTracker</h1>
            <nav>
                <NavLink
                    to = "/profile"
                    className = 'button'>
                    Profile
                </NavLink>
                <NavLink
                    to = "/library"
                    className = 'button'>
                    Library
                </NavLink>
                <NavLink
                    to = "/purchase"
                    className = 'button'>
                    Purchase
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;

