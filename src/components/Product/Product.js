import React from 'react';
import './Product.scss'

const Product = ({src, alt, name, price}) => {
    return (
        <div className="product">
            <img src={src} alt={alt} className="product__img"/>
            <div className="product__name">{name}</div>
            <div className="product__price">{price}</div>
        </div>
    );
};

export default Product;