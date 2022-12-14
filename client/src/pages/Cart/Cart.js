import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import MyBtn from "../../components/UI/MyBtn/MyBtn";
import CartProduct from "../../components/CartProduct/CartProduct";

import {SERVER_URL} from "../../utils/consts";

import './Cart.scss'


const Cart = () => {
    const cart = useSelector(state => state.cartProduct.cart)
    const sum = cart.reduce((accumulator, object) => {
        return accumulator + object.price * object.quantity;
    }, 0)



    return (
        <section className='section-inner cart'>
            {
                cart.length === 0 ?
                    <div className="cart__wrapper--empty">
                        Cart is Empty!
                    </div> :
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
                                    <CartProduct
                                        className='' id={product.name + product.sizes}
                                        key={i} name={product.name}
                                        price={product.price}
                                        size={product.sizes}
                                        img={`${SERVER_URL}/${product.img}`}
                                        number={product.numbers}
                                        total={Number(product.quantity) * Number(product.price)}
                                        value={product.quantity}
                                    />
                                )
                            })
                        }
                    </div>
            }
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
                    <MyBtn className='totals__btn' disabled={cart.length === 0 && true}>Proceed to Checkout</MyBtn>
                </Link>
            </div>
        </section>
    );
};

export default Cart;