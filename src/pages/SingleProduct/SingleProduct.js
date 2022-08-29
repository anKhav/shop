import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import Dropdown from "../../components/Dropdown/Dropdown";
import Rating from '../../components/Products/Product/Rating/Rating'
import MyBtn from "../../components/UI/MyBtn/MyBtn";

import {setProduct} from '../../feature/cartProduct/cartProductSlice'

import './SingleProduct.scss'

const SingleProduct = () => {
    const [selectedSize, setSelectedSize] = useState('Select Size')
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    const {id} = useParams()
    const equalIdProduct = products.find(product => product.id === Number(id))

    const productToCart = {...equalIdProduct}
    productToCart.sizes = selectedSize

     const handler = () =>{
            dispatch(setProduct(productToCart))
     }


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
                        <MyBtn disabled={selectedSize === 'Select Size'} className='product__btn' onClick={() =>handler()}>Add to Cart</MyBtn>
                        <ul className="product__categories">
                            <h5 className="tags__title">Category:&#160;</h5>
                            {
                                equalIdProduct.categories.map((category ,i ) => {
                                    return (
                                        i < equalIdProduct.categories.length - 1 ? <li key={Math.random() + i}>{category},&#160;</li> :
                                            <li key={Math.random() + i}>{category}.</li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="product__tags">
                            <h5 className="tags__title">Tag:&#160;</h5>
                            {
                                equalIdProduct.tags.map((tag ,i ) => {
                                    return (
                                        i < equalIdProduct.tags.length - 1 ? <li key={Math.random() + i}>{tag},&#160;</li> :
                                            <li key={Math.random() + i}>{tag}.</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="product__footer"></div>
            </div>
        </section>
    );
};

export default SingleProduct;