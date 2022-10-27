import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

import Product from "../../components/Products/Product/Product";


const Shop = () => {
    const products = useSelector(state => state.products)
    const {cat} = useParams()

    if(cat === 'women'){
        return <div className="shop">
            <h1 className="shop__title">{cat}</h1>
            <div className="shop__wrapper">
                {
                    products.filter(item => item.cat === 'Women')
                        .map(product => {
                            return <Product
                                key={product.id}
                                src={product.img}
                                alt={product.name}
                                name={product.name}
                                price={product.price}
                                id={product.id}
                                rating={product.rating}
                                inCart={product.inCart}
                                quantity={product.cartQuantity}
                            />
                        })
                }
            </div>
        </div>
    } else if(cat === 'men'){
        return <div className="shop">
            <h1 className="shop__title">{cat}</h1>
            <div className="shop__wrapper">
                {
                    products.filter(item => item.cat === 'Men')
                        .map(product => {
                            return <Product
                                key={product.id}
                                src={product.img}
                                alt={product.name}
                                name={product.name}
                                price={product.price}
                                id={product.id}
                                rating={product.rating}
                                inCart={product.inCart}
                                quantity={product.cartQuantity}
                            />
                        })
                }
            </div>
        </div>
    } else {
            return <div className="shop">
                <h1 className="shop__title">{cat}</h1>
                <div className="shop__wrapper">
                    {
                        products.map(product => {
                            return <Product
                                key={product.id}
                                src={product.img}
                                alt={product.name}
                                name={product.name}
                                price={product.price}
                                id={product.id}
                                rating={product.rating}
                                inCart={product.inCart}
                                quantity={product.cartQuantity}
                            />
                        })
                    }
                </div>
            </div>
    }
};

export default Shop;