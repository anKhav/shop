import React, {useEffect} from 'react';


import {deleteProduct, getProducts} from "../../../feature/products/productsSlice";
import {useDispatch, useSelector} from "react-redux";
import MyBtn from "../../../components/UI/MyBtn/MyBtn";

const DeleteProduct = () => {
    const removeProduct = (e) => {
        const id = {
            id: e.target.id
        }
        console.log(id)
        dispatch(deleteProduct(id))
        window.location.reload()
    }

    const dispatch= useDispatch()
    const products = useSelector(state => state.products.products)

    useEffect( () => {
        dispatch(getProducts())
    },[dispatch])
    return (
        <div className='products-delete'>
            {
               products ?  products.map(product => {
                   return (
                       <div className='product' key={product.id} onClick={(e) => removeProduct(e)}>
                           <h3 className='product__title'>{product.name}</h3>
                           <span>{product.price}$</span>
                           <div className="product__img">
                               <img id={product.id} src={`http://localhost:5000/${product.img}`} alt={product.name}/>
                           </div>
                           <MyBtn
                               id={product.id}
                               type='submit'
                               onClick={
                                   (e) => removeProduct(e)
                               }
                               className='products-delete__btn'
                           >
                               Delete
                           </MyBtn>
                       </div>
                   )
               }) :
                   <div>lol</div>
            }
        </div>
    );
};

export default DeleteProduct;