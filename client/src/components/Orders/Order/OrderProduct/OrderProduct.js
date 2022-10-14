import React from 'react';

const OrderProduct = ({product, className}) => {
    const {id, img, name, price, sizes} = JSON.parse(product)
    return (
            <div className='product'>
                <div className='product__img'>
                    <img src={`http://localhost:5000/${img}`} alt=""/>
                </div>
                <div className='order__detail'>{`${name} (${sizes})`}</div>
                <div className='order__detail'>${price}</div>
            </div>
    );
};

export default OrderProduct;