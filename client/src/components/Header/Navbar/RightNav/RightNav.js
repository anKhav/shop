import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import Menu from "../../Menu/Menu";


import './RightNav.scss'
import Burger from "../../../Burger/Burger";
import UserIcon from "./UserIcon/UserIcon";
import CartIcon from "./CartIcon/CartIcon";


const RightNav = () => {
    const cart = useSelector(state => state.cartProduct.cart)
    const {user} = useSelector(state => state.user)
    let sum = []
    if (cart.length !== 0){
        const sumWithInitial = cart.map(item => item.quantity).reduce(
            (previousValue, currentValue) => previousValue + currentValue
        )
        sum.push(sumWithInitial)
    } else{
        sum = 0
    }

    const {isAuth} = useSelector(state => state.user)
    const role = user ? user.role : null



    return (
        <div className='RightNav'>
            {user ?
                <div className='RightNav__wrapper'>
                    {role === "ADMIN" ? <Link to='/admin'>Admin</Link> : null}
                    <Link className='right-nav__icon' to={isAuth ? '/cabinet' : '/auth'}>
                        <UserIcon/>
                    </Link>
                    <Link className='cart__link' to='/cart'>
                        <CartIcon/>
                        {cart.length === 0 ? false :
                            <span className="cart__number">{sum}</span>}
                    </Link>
                    <Burger/>
                    {/*<Menu/>*/}
                </div>:
                <div className='RightNav__wrapper'>
                    <Link className='right-nav__icon' to='/auth'><img src='/img/user_icon.svg' alt='user icon'/></Link>
                    <Link className='cart__link' to='/cart'>
                        <img src='/img/shopping-bag.svg' alt='cart icon' />
                        {cart.length === 0 ? false :
                            <span className="cart__number">{sum}</span>}
                    </Link>
                    <Burger/>
                    {/*<Menu/>*/}
                </div>
            }
        </div>
    );
};

export default RightNav;