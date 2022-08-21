import React from 'react';
import {ProductsData} from "../../data/data";
import Product from "../Product/Product";

const Products = ({className, newarr, best}) => {
    return (
        <div className={className}>
            {
                newarr ?
                    (ProductsData.filter((product) => {
                        return product.new === true})
                        .map(product => {
                            return <Product
                                key={product.id}
                                src={product.img}
                                alt={product.name}
                                name={product.name}
                                price={product.price}
                                id={product.id}
                            />
                    })) :
                    false
            }
            {
                best ?
                    (ProductsData.filter((product) => {
                        return product.best === true})
                        .map(product => {
                            return <Product
                                key={product.id}
                                src={product.img}
                                alt={product.name}
                                name={product.name}
                                price={product.price}
                                id={product.id}
                            />
                        })) :
                    false
            }
        </div>
    );
};

export default Products;
// ProductsData.filter((product) => {
//     return product.new === true
// }).map(product => {
//     return <Product
//         src={product.img}
//         alt={product.name}
//         name={product.name}
//         price={product.price}
//     />
// })
