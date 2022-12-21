import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import Dropdown from "../../components/Dropdown/Dropdown";
import Rating from '../../components/Products/Product/Rating/Rating'
import MyBtn from "../../components/UI/MyBtn/MyBtn";

import {getOneProduct} from "../../features/product/productSlice";

import {setCartProduct} from "../../features/cartProduct/cartProductSlice";
import {SERVER_URL} from "../../utils/consts";
const SingleProduct = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(getOneProduct(id))
    },[dispatch,id])
    const product = useSelector(state => state.product.product.product)

    const [selectedSize, setSelectedSize] = useState('Select Size')

    const handleToCart = (e) => {
        e.preventDefault()
        const productToCart = {...product, sizes: selectedSize}
        dispatch(setCartProduct(productToCart))
        console.log(e.target)
        console.log(productToCart);
    }
    const firstLetterToUpperCase = (word) => {
        const arr = [...word]
        arr.splice(0, 1, arr[0].toUpperCase());
        return arr.join('')
    }

    return (
        <div>
            { product ?
                (
                    <section className="SingleProduct">
                        <div className="section-inner product">
                            <div className="product__wrapper">
                                <div className="product__img">
                                    <img src={`${SERVER_URL}/${product.img}`} alt={product.name}/>
                                </div>
                                <div className="product__content">
                                    <h2 className="product__title">
                                        {firstLetterToUpperCase(product.name)}
                                    </h2>
                                    <Rating rating={product.rating}/>
                                    <span className="product__price">${product.price}</span>
                                    <p className="product__descr">
                                        A classic t-shirt never goes out of style. This is our most premium collection of shirt.
                                        This plain white shirt is made up of pure cotton and has a premium finish.
                                    </p>
                                    <Dropdown closable={true} selected={selectedSize} setSelected={setSelectedSize} obj={product.sizes}/>
                                    <MyBtn disabled={selectedSize === 'Select Size'} className='product__btn' onClick={(e) => handleToCart(e)}>Add to Cart</MyBtn>
                                    <ul className="product__categories">
                                        <h5 className="tags__title">Category:&#160;</h5>
                                        {
                                            product.categories.map((category ,i ) => {
                                                return (
                                                    i < product.categories.length - 1 ? <li key={Math.random() + i}>{category},&#160;</li> :
                                                        <li key={Math.random() + i}>{category}.</li>
                                                )
                                            })
                                        }
                                    </ul>
                                    {/*<ul className="product__tags">*/}
                                    {/*    <h5 className="tags__title">Tag:&#160;</h5>*/}
                                    {/*    {*/}
                                    {/*        product.tags.map((tag ,i ) => {*/}
                                    {/*            return (*/}
                                    {/*                i < product.tags.length - 1 ? <li key={Math.random() + i}>{tag},&#160;</li> :*/}
                                    {/*                    <li key={Math.random() + i}>{tag}.</li>*/}
                                    {/*            )*/}
                                    {/*        })*/}
                                    {/*    }*/}
                                    {/*</ul>*/}
                                </div>
                            </div>
                            <div className="product__footer"></div>
                        </div>
                    </section>
                ):
            <div>error</div>}
        </div>
    );
};

export default SingleProduct;