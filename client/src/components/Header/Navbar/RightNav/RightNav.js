import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Menu from "../../Menu/Menu";
import {setIsAuth} from "../../../../feature/user/userSlice";


const RightNav = () => {
    const cart = useSelector(state => state.cartProduct.cart)
    let sum = []
    if (cart.length !== 0){
        const sumWithInitial = cart.map(item => item.cartQuantity).reduce(
            (previousValue, currentValue) => previousValue + currentValue
        )
        sum.push(sumWithInitial)
    } else{
        sum = 0
    }

    const dispatch = useDispatch()
    const {isAuth} = useSelector(state => state.user.user)


    return (
        <div className='RightNav'>
            {isAuth ?
                <div className='RightNav__wrapper'>
                    <Link to='/admin'>Admin</Link>
                    <Link onClick={() => dispatch(setIsAuth())} className='right-nav__icon' to='/auth'><img src='/img/user_icon.svg' alt='user icon'/></Link>
                    <Link className='cart__link' to='/cart'>
                        <img src='/img/shopping-bag.svg' alt='cart icon' />
                        {cart.length === 0 ? false :
                            <span className="cart__number">{sum}</span>}
                    </Link>
                    <Menu/>
                </div>:
                <div className='RightNav__wrapper'>
                    <Link onClick={() => dispatch(setIsAuth())} className='right-nav__icon' to='/auth'><img src='/img/user_icon.svg' alt='user icon'/></Link>
                    <Link className='cart__link' to='/cart'>
                        <img src='/img/shopping-bag.svg' alt='cart icon' />
                        {cart.length === 0 ? false :
                            <span className="cart__number">{sum}</span>}
                    </Link>
                    <Menu/>
                </div>
            }
        </div>
    );
};

export default RightNav;