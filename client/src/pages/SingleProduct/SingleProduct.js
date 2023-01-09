import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import { ThreeCircles } from  'react-loader-spinner'

import Dropdown from "../../components/Dropdown/Dropdown";
import Rating from '../../components/Products/Product/Rating/Rating'
import MyBtn from "../../components/UI/MyBtn/MyBtn";

import {getOneProduct} from "../../features/product/productSlice";

import {setCartProduct} from "../../features/cartProduct/cartProductSlice";
import {SERVER_URL} from "../../utils/consts";

const SingleProduct = () => {

    const id = Number(useParams().id)

    const dispatch = useDispatch()
    const product = useSelector(state => state.product.product)
    console.log(product);

    useEffect( () => {
        dispatch(getOneProduct(id))
        console.log(product)
    },[dispatch,id])

    const [selectedSize, setSelectedSize] = useState('Select Size')

    const handleToCart = (e) => {
        e.preventDefault()
        const productToCart = {...product, sizes: selectedSize}
        dispatch(setCartProduct(productToCart))
    }
    const firstLetterToUpperCase = (word) => {
        const arr = [...word]
        arr.splice(0, 1, arr[0].toUpperCase());
        return arr.join('')
    }

    return (
        <div>
            { product !== null ?
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
                <div className='SingleProduct--empty'>
                    <ThreeCircles
                        height="100"
                        width="100"
                        color="#4fa94d"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="three-circles-rotating"
                        outerCircleColor="#d6763c"
                        innerCircleColor="#ffffff"
                        middleCircleColor="#d6763c"
                    />
                </div>
            }
        </div>
    );
};

export default SingleProduct;