import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeProduct, setCardProductQuantity} from "../../features/cartProduct/cartProductSlice";


const CartProduct = ({name, size, price, img, id, className, value, total}) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(Number(value))
    const cart = useSelector(state => state.cartProduct.cart)

    useEffect(() => {

    }, [quantity])

    const quantityHandler = async (e) => {
        await setQuantity(Number(e.target.value))
        await setQuantity(e.target.value)
        await dispatch(setCardProductQuantity({name, size, quantity:Number(e.target.value)}))
    }

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
                <input key={id}  min='1' value={quantity} onChange={(e) => quantityHandler(e)}/>
            </div>
            <div className={`cart__detail${className}`}>${total}</div>
        </div>
    );
};

export default CartProduct;