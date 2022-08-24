import React from 'react';

const Cart = () => {
    return (
        <section className='section-inner cart'>
            <div className="cart__content">
                <div className="cart__product">Product</div>
                <div className="cart__price">Price</div>
                <div className="cart__quantity">Quantity</div>
                <div className="cart__total">Total</div>
            </div>
            <div className="cart__totals"></div>
        </section>
    );
};

export default Cart;