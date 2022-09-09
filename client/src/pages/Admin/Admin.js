import React, {useEffect, useState} from 'react';
import MyBtn from "../../components/UI/MyBtn/MyBtn";
import {NavLink, useLocation} from "react-router-dom";
import './Admin.scss'
import Dropdown from "../../components/Dropdown/Dropdown";

import {useDispatch, useSelector} from "react-redux";
import {getSizes} from "../../feature/size/sizeSlice";
import {getCategories} from "../../feature/category/categorySLice";
import Categories from "../../components/Categories/Categories";

const Admin = () => {
    const fileReader = new FileReader()
    const {pathname} = useLocation()
    const dispatch = useDispatch()
    const [selectedName, setSelectedName] = useState('')
    const [selectedPrice, setSelectedPrice] = useState(0)
    const [selectedSize, setSelectedSize] = useState('Select Size')
    const [sizeArray, setSizeArray] = useState([])
    const [categoriesArray, setCategoriesArray] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('Select Category')



    const [image, setImage] = useState()
    const [selectedImgUrl, setSelectedImgUrl] = useState()
    fileReader.onloadend = () => {
        setSelectedImgUrl(fileReader.result)
    }

    const changeHandler = (e) => {
        e.preventDefault()
        const file = e.target.files[0]
        setImage(file)
        fileReader.readAsDataURL(file)
    }
    const sizeArr = []
    const handleSizes = (e) => {
        const res = sizeArr.push(e.target.innerText)
        setSizeArray([...sizeArray,sizeArr])
        console.log(res)
    }

    const categoryArr = []
    const handleCat = (e) => {
        const res = categoryArr.push(e.target.innerText)
        setCategoriesArray([...categoriesArray,categoryArr])
        console.log(res)
    }

    const createNewProduct = () => {
        const newProduct = {
            name:selectedName,
            price:selectedPrice,
            size:sizeArray,
            category:categoriesArray,
            img:image
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

    return (
        <div className='section-inner admin'>
            <div className="admin__header">
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
                                    <input value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)} type="number" className='dropdown__item' placeholder='Product Price'/>
                                    <label htmlFor="input-file" className="custom-file-upload dropdown__item">
                                        {image ? image.name : "Select File"}
                                    </label>
                                    <input id="input-file" onChange={changeHandler} type="file" placeholder='Product Img'/>
                                    <Dropdown selected={selectedSize} setSelected={setSelectedSize} obj={sizes} onClick={(e) => handleSizes(e)}/>
                                    <Dropdown closable={false} selected={selectedCategory} setSelected={setSelectedCategory} obj={categories} onClick={(e) => handleCat(e)}/>
                                </div>
                                <div className="admin__product">
                                    <h3 className="product__info">Name: {createNewProduct().name}</h3>
                                    <span className="product__info">Price: {createNewProduct().price} $</span>
                                    <span className="product__info">Sizes: {createNewProduct().size.join(', ')}</span>
                                    <span className="product__info">Categories: {createNewProduct().category.join(', ')}</span>
                                    {image ? <img className="product__info product__img" src={selectedImgUrl} alt="Product img"/> : false}
                                </div>
                            </div>
                            :
                        <Categories/>
                    }
                </form>
                <MyBtn onClick={ () => createNewProduct()} className='admin__btn'>Add</MyBtn>
            </div>
        </div>
    );
};

export default Admin;