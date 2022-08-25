import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


const RightNav = () => {
    const cart = useSelector(state => state.cartProduct)
    return (
        <div className='RightNav'>
            <Link className='right-nav__icon' to='/user'><img src='/img/user_icon.svg' alt='user icon'/></Link>
            <Link className='cart__link' to='/cart'>
                <img src='/img/shopping-bag.svg' alt='cart icon' />
                {cart.length === 0 ? false :
                    <span className="cart__number">{cart.length}</span>}
            </Link>
        </div>
    );
};

export default RightNav;