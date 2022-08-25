import React from 'react';
import './Cart.scss'
import CartProduct from "../../components/CartProduct/CartProduct";
import {useSelector} from "react-redux";
import MyBtn from "../../components/UI/MyBtn/MyBtn";
import {Link} from "react-router-dom";

const Cart = () => {
    const cart = useSelector(state => state.cartProduct)
    const sum = cart.reduce((accumulator, object) => {
        return accumulator + object.price;
    }, 0);


    return (
        <section className='section-inner cart'>
            <div className="cart__wrapper">
                <div className="cart__header cart__content">
                    <div className="empty"></div>
                    <h3 className='cart__title'>Product</h3>
                    <h3 className='cart__title'>Price</h3>
                    <h3 className='cart__title'>Quantity</h3>
                    <h3 className='cart__title'>Total</h3>
                </div>
                {
                    cart.map((product, i) => {
                        return (
                            <CartProduct className='' id={product.name + product.sizes} key={i} name={product.name} price={product.price} size={product.sizes} img={product.img}/>
                        )
                    })
                }
            </div>
            <div className="totals">
                <h2 className="title">Cart Totals</h2>
                <div className="subtotal">
                    <h4 className="subtotal__title">Subtotal</h4>
                    <div className="subtotal__price">${sum}</div>
                </div>
                <div className="shipping">
                    <h4 className="shipping__title">Shipping Free</h4>
                    <div className="shipping__price">FREE!!!</div>
                </div>
                <div className="total">
                    <h4 className="total__title">Subtotal</h4>
                    <div className="total__price">${sum}</div>
                </div>
                <Link to={'/checkout'}>
                    <MyBtn className='totals__btn'>Proceed to Checkout</MyBtn>
                </Link>
            </div>
        </section>
    );
};

export default Cart;