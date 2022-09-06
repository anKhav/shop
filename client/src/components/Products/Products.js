import React, {useEffect} from 'react';
import Product from "./Product/Product";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../feature/products/productsSlice";

const Products = ({className, newarr, best}) => {
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getProducts())
    },[])

    return (
        <div className={className}>
            {
                products.map(product => {
                        return <Product
                            key={product.id}
                            src={`http://localhost:5000/${product.img}`}
                            // alt={product.name}
                            name={product.name}
                            price={product.price}
                            id={product.id}
                            rating={product.rating}
                            // inCart={product.inCart}
                            // quantity={product.cartQuantity}
                        />
                    })
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

