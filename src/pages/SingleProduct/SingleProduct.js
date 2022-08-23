import React, {useState} from 'react';
import {ProductsData} from "../../data/data";
import {useParams} from "react-router-dom";
import Rating from '../../components/Rating/Rating'
import MyBtn from "../../components/UI/MyBtn/MyBtn";

import './SingleProduct.scss'
import Dropdown from "../../components/Dropdown/Dropdown";

const SingleProduct = () => {
    const [selectedSize, setSelectedSize] = useState('Select Size')

    const {id} = useParams()
    const equalIdProduct = ProductsData.find(product => product.id === id)
    return (
        <section className="SingleProduct">
            <div className="section-inner product">
                <div className="product__wrapper">
                    <div className="product__img">
                        <img src={equalIdProduct.img} alt={equalIdProduct.name}/>
                    </div>
                    <div className="product__content">
                        <h2 className="product__title">
                            {equalIdProduct.name}
                        </h2>
                        <Rating rating={equalIdProduct.rating}/>
                        <span className="product__price">${equalIdProduct.price}</span>
                        <p className="product__descr">
                            A classic t-shirt never goes out of style. This is our most premium collection of shirt.
                            This plain white shirt is made up of pure cotton and has a premium finish.
                        </p>
                        <Dropdown selected={selectedSize} setSelected={setSelectedSize} product={equalIdProduct}/>
                        <MyBtn className='product__btn'>Add to Cart</MyBtn>
                        <ul className="product__categories">
                            <h5 className="categories__title">Category: </h5>
                            <li className="product__category">Women,</li>
                            <li className="product__category">Polo,</li>
                            <li className="product__category">Casual,</li>
                        </ul>
                        <ul className="product__tags">
                            <h5 className="tags__title">Tag: </h5>
                            <li className="product__tag">Modern,</li>
                            <li className="product__tag">Design,</li>
                            <li className="product__tag">Cotton,</li>
                        </ul>
                    </div>
                </div>
                <div className="product__footer"></div>
            </div>
        </section>
    );
};

export default SingleProduct;