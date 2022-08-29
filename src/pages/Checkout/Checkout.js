import React from 'react';
import {useSelector} from "react-redux";

import MyBtn from "../../components/UI/MyBtn/MyBtn";
import CartProduct from "../../components/CartProduct/CartProduct";

import './Checkout.scss'

const Checkout = () => {
    const cart = useSelector(state => state.cartProduct.cart)
    const sum = cart.reduce((accumulator, object) => {
        return accumulator + object.price;
    }, 0);


    return (
        <section className='section-inner checkout'>
            <div className="checkout__content">
                <h2 className="checkout__title">Billing details</h2>
                <form className="checkout__form">
                    <div className="checkout__input">
                        <label htmlFor="" className="checkout__label">Full Name<span>*</span></label>
                        <input type="text"/>
                    </div>
                    <div className="checkout__input">
                        <label htmlFor="" className="checkout__label">Street address<span>*</span></label>
                        <input type="text" placeholder='House number and street name'/>
                    </div>
                    <div className="checkout__input">
                        <label htmlFor="" className="checkout__label">Town / City<span>*</span></label>
                        <input type="text"/>
                    </div>
                    <div className="checkout__input">
                        <label htmlFor="" className="checkout__label">Phone<span>*</span></label>
                        <input type="text"/>
                    </div>
                    <div className="checkout__input">
                        <label htmlFor="" className="checkout__label">Email address<span>*</span></label>
                        <input type="text"/>
                    </div>
                </form>
            </div>
            <div className="checkout__order">
                <h2 className="checkout__title">
                    Your order
                </h2>
                <div className="checkout__wrapper">
                    <div className="checkout__header">
                        <div className="empty"></div>
                        <h3 className='cart__title'>Product</h3>
                        <h3 className='cart__title'>Total</h3>
                    </div>
                    {
                        cart.map((product, i) => {
                            return (
                                <CartProduct className='--none' id={product.name + product.sizes} key={i} name={product.name} price={product.price} size={product.sizes} img={product.img}/>
                            )
                        })
                    }
                    <div className="subtotal">
                        <h3 className="subtotal__title">Subtotal</h3>
                        <div className="subtotal__price">${sum}</div>
                    </div>
                </div>
            </div>
            <div className="checkout__footer">
                <p className="checkout__delivery">
                    Cash on delivery.
                    Please contact us if you require assistance or wish to make alternate arrangements.
                </p>
                <MyBtn className='checkout__btn'>Place Order</MyBtn>
            </div>
        </section>
    );
};

export default Checkout;