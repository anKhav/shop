import React from 'react';
import {useDispatch} from "react-redux";
import {removeProduct} from "../../feature/cartProduct/cartProduct";
import './CartProduct.scss'

const CartProduct = ({name, size, price, img, id}) => {
    const dispatch = useDispatch()

    return (
        <div className="cart__content cart__product">
            <div className='cart__btn'>
                <div className='cart__btn' id={name} onClick={()=>dispatch(removeProduct(id))}>x</div>
            </div>
            <div className='cart__img'>
                <img src={img} alt=""/>
            </div>
            <div className='cart__detail'>{`${name} (${size})`}</div>
            <div className='cart__detail'>${price}</div>
            <div className='cart__detail'>
                <input type="number" defaultValue='1'/>
            </div>
            <div className='cart__detail'>${price}</div>
        </div>
    );
};

export default CartProduct;