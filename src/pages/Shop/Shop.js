import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Product from "../../components/Product/Product";
import './Shop.scss'

const Shop = () => {
    const products = useSelector(state => state.products)
    const {cat} = useParams()

    if(cat === 'women'){
        return <div className="shop">
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
    } else if(cat === 'men'){
        return <div className="shop">
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
    } else {
            return <div className="shop">
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
    }
};

export default Shop;