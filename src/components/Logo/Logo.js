import React from 'react';
import './Logo.scss'
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to='/' className='Logo'>
           NorthStar
        </Link>
    );
};

export default Logo;