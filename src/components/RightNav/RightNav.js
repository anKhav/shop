import React from 'react';
import {Link} from "react-router-dom";


const RightNav = () => {
    return (
        <div className='RightNav'>
            <Link className='right-nav__icon' to='/user'><img src='/img/user_icon.svg' alt='user icon'/></Link>
            <Link to='/cart'><img src='/img/shopping-bag.svg' alt='cart icon' /></Link>
        </div>
    );
};

export default RightNav;