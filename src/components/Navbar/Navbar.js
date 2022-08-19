import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";

const Navbar = () => {
    return (
        <nav>
            <Link className='nav__link' to='/'>Home</Link>
            <Link className='nav__link' to='/about'>About</Link>
            <Link className='nav__link' to='/contact'>Contact Us</Link>
        </nav>
    );
};

export default Navbar;