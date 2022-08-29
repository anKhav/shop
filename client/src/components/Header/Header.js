import React from 'react';
import Logo from "../Logo/Logo";
import Navbar from "./Navbar/Navbar";

import './Header.scss'

import RightNav from "./Navbar/RightNav/RightNav";

const Header = () => {
    return (
        <header className='Header section-inner'>
            <Logo/>
            <Navbar/>
            <RightNav/>
        </header>
    );
};

export default Header;