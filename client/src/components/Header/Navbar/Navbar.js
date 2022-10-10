import React from 'react';
import {NavLink} from "react-router-dom";
import './navbar.scss'

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink className='nav__link' to='/'>Home</NavLink>
            <NavLink className='nav__link' to='/about'>About</NavLink>
            <NavLink className='nav__link' to='/contact'>Contact Us</NavLink>
        </nav>
    );
};

export default Navbar;