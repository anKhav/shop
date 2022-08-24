import React from 'react';
import './Product.scss'
import {Link} from "react-router-dom";

const Product = ({src, alt, name, price, id}) => {
    return (
        <Link id={id} className='product' to={`/products/${id}`} >
                <img src={src} alt={alt} className="product__img"/>
                <div className="product__name">{name}</div>
                <div className="product__price">${price}</div>
        </Link>
    );
};

export default Product;