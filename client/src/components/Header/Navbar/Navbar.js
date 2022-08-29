import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink className='nav__link' to='/'>Home</NavLink>
            <NavLink className='nav__link' to='/about'>About</NavLink>
            <NavLink className='nav__link' to='/contact'>Contact Us</NavLink>
        </nav>
    );
};

export default Navbar;