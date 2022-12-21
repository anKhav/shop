import React from 'react';
import {useDispatch} from "react-redux";
import {removeProduct} from "../../features/cartProduct/cartProductSlice";

const CartProduct = ({name, size, price, img, id, className, value, total, onChange}) => {
    const dispatch = useDispatch()

    return (
        <div className="cart__content cart__product">
            <div className={`cart__btn${className}`}>
                <div className='cart__btn' id={name + size} onClick={()=>dispatch(removeProduct(id))}>x</div>
            </div>
            <div className={`cart__img${className}`}>
                <img src={img} alt=""/>
            </div>
            <div className='cart__detail'>{`${name} (${size})`}</div>
            <div className='cart__detail'>${price}</div>
            <div className={`cart__detail${className}`}>
                <input key={id} type="number" value={value} onChange={onChange}/>
            </div>
            <div className={`cart__detail${className}`}>${total}</div>
        </div>
    );
};

export default CartProduct;