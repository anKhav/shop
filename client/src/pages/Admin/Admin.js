import React, {useEffect, useState} from 'react';
import MyBtn from "../../components/UI/MyBtn/MyBtn";
import {NavLink, useLocation} from "react-router-dom";
import './Admin.scss'
import Dropdown from "../../components/Dropdown/Dropdown";

import {useDispatch, useSelector} from "react-redux";
import {getSizes} from "../../feature/size/sizeSlice";
import {getCategories} from "../../feature/category/categorySLice";

const Admin = () => {
    const {pathname} = useLocation()
    const dispatch = useDispatch()
    const [selectedName, setSelectedName] = useState('')
    const [selectedPrice, setSelectedPrice] = useState(0)
    const [selectedImg, setSelectedImg] = useState('')
    const [selectedSize, setSelectedSize] = useState('Select Size')
    const [selectedCategory, setSelectedCategory] = useState('Select Category')

    const createNewProduct = () => {
        const newProduct = {
            name:selectedName,
            price:selectedPrice,
            size:selectedSize,
            category:selectedCategory,
            img:selectedImg
        }
        console.log(newProduct)
        return newProduct
    }

    useEffect( () => {
        dispatch(getSizes())
        dispatch(getCategories())
    },[dispatch])

    const sizes = useSelector(state => state.sizes.sizes).map(size => size.name)
    const categories = useSelector(state => state.categories.categories).map(size => size.name)

    const changeHandler = (e) => {
        setSelectedImg(e.target.files[0].name)
    }
    return (
        <div className='section-inner admin'>
            <div className="admin__header">
                <NavLink className={({ isActive }) => (isActive ? "link link-active" : "link")} to='/admin/size'>
                    Create size
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "link link-active" : "link")} to='/admin/category'>
                    Create category
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "link link-active" : "link")} to='/admin/product'>
                    Create product
                </NavLink>
            </div>
            <div className="admin__content">
                <form className='admin__form'>
                    {
                        pathname === '/admin/product' ?
                            <div>
                                <div>
                                    <input value={selectedName} onChange={(e) => setSelectedName(e.target.value)} type="text" className='dropdown__item' placeholder='Product Name'/>
                                    <input value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)} type="text" className='dropdown__item' placeholder='Product Price'/>
                                    <label htmlFor="input-file" className="custom-file-upload dropdown__item">
                                        {selectedImg || "Select File"}
                                        <input id="input-file" onChange={changeHandler} type="file" placeholder='Product Img'/>
                                    </label>
                                    <Dropdown selected={selectedSize} setSelected={setSelectedSize} obj={sizes}/>
                                    <Dropdown selected={selectedCategory} setSelected={setSelectedCategory} obj={categories}/>
                                </div>
                                <div className="admin__product">
                                    <h3 className="product__info">Name: {createNewProduct().name}</h3>
                                    <span className="product__info">Price: {createNewProduct().price} $</span>
                                    <span className="product__info">Sizes: {createNewProduct().size}</span>
                                    <span className="product__info">Categories: {createNewProduct().category}</span>
                                    {selectedImg && <img className="product__info product__img" src={`/img/${selectedImg}`} alt="Product img"/>}
                                </div>
                            </div>
                            :
                            <input type="text" className='admin__input' placeholder={pathname === '/admin/size' ? 'Size' : 'Category'}/>
                    }
                </form>
                <MyBtn onClick={() => createNewProduct()} className='admin__btn'>Add</MyBtn>
            </div>
        </div>
    );
};

export default Admin;