import React, {useEffect} from 'react';
import Product from "./Product/Product";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../features/products/productsSlice";
import {SERVER_URL} from "../../utils/consts";

const Products = ({className}) => {
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getProducts())
    },[dispatch])
    const products = useSelector(state => state.products.products)

    return (
        <div className={className}>
            {
                products ?
                    (
                        products.map(product => {
                            return <Product
                                key={product.id}
                                src={`${SERVER_URL}/${product.img}`}
                                name={product.name}
                                price={product.price}
                                id={product.id}
                                rating={product.rating}
                            />
                        })
                    ) :
                    <div>Loading...</div>
            }
            {/*{*/}
            {/*    newarr ?*/}
            {/*        (products.filter((product) => {*/}
            {/*            return product.new === true})*/}
            {/*            .map(product => {*/}
            {/*                return <Product*/}
            {/*                    key={product.id}*/}
            {/*                    src={product.img}*/}
            {/*                    alt={product.name}*/}
            {/*                    name={product.name}*/}
            {/*                    price={product.price}*/}
            {/*                    id={product.id}*/}
            {/*                    rating={product.rating}*/}
            {/*                    inCart={product.inCart}*/}
            {/*                    quantity={product.cartQuantity}*/}
            {/*                />*/}
            {/*        })) :*/}
            {/*        false*/}
            {/*}*/}
            {/*{*/}
            {/*    best ?*/}
            {/*        (products.filter((product) => {*/}
            {/*            return product.best === true})*/}
            {/*            .map(product => {*/}
            {/*                return <Product*/}
            {/*                    key={product.id}*/}
            {/*                    src={product.img}*/}
            {/*                    alt={product.name}*/}
            {/*                    name={product.name}*/}
            {/*                    price={product.price}*/}
            {/*                    id={product.id}*/}
            {/*                    rating={product.rating}*/}
            {/*                    sizes={product.sizes}*/}
            {/*                    inCart={product.inCart}*/}
            {/*                    quantity={product.cartQuantity}*/}
            {/*                />*/}
            {/*            })) :*/}
            {/*        false*/}
            {/*}*/}
        </div>
    );
};

export default Products;

