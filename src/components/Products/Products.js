import React from 'react';
import Product from "../Product/Product";
import {useSelector} from "react-redux";

const Products = ({className, newarr, best}) => {
    const products = useSelector(state => state.products)
    console.log(products)
    return (
        <div className={className}>
            {
                newarr ?
                    (products.filter((product) => {
                        return product.new === true})
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
                            />
                    })) :
                    false
            }
            {
                best ?
                    (products.filter((product) => {
                        return product.best === true})
                        .map(product => {
                            return <Product
                                key={product.id}
                                src={product.img}
                                alt={product.name}
                                name={product.name}
                                price={product.price}
                                id={product.id}
                                rating={product.rating}
                                sizes={product.sizes}
                                inCart={product.inCart}
                            />
                        })) :
                    false
            }
        </div>
    );
};

export default Products;

