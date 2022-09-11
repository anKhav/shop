import React, {useEffect, useState} from 'react';
import Dropdown from "../../../components/Dropdown/Dropdown";
import MyBtn from "../../../components/UI/MyBtn/MyBtn";
import {createProduct} from "../../../feature/products/productsSlice";
import {useDispatch, useSelector} from "react-redux";
import {getSizes} from "../../../feature/size/sizeSlice";
import {getCategories} from "../../../feature/category/categorySLice";

const CreateProduct = () => {

    const dispatch = useDispatch()
    const fileReader = new FileReader()
    const [selectedName, setSelectedName] = useState('')
    const [selectedPrice, setSelectedPrice] = useState(0)
    const [selectedSize, setSelectedSize] = useState('Select size')
    const [selectedArraySize, setSelectedArraySize] = useState([])
    const [categoriesArray, setCategoriesArray] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('Select Category')
    const [image, setImage] = useState()
    const [selectedImgUrl, setSelectedImgUrl] = useState()

    useEffect( () => {
        dispatch(getSizes())
        dispatch(getCategories())
    },[dispatch])

    fileReader.onloadend = () => {
        setSelectedImgUrl(fileReader.result)
    }
    const changeHandler = (e) => {
        e.preventDefault()
        const file = e.target.files[0]

        setImage(file)
        fileReader.readAsDataURL(file)
    }
    const handleSizes = (e) => {
        setSelectedArraySize([...selectedArraySize,e.target.innerText])
    }

    const handleCat = (e) => {
        setCategoriesArray([...categoriesArray,e.target.innerText])
    }

    const arrayToStr = (arr) => {
        const newArr = arr.join(',')
        return newArr
    }
    const createNewProduct = () => {
        const size = arrayToStr(selectedArraySize)
        const category = arrayToStr(categoriesArray)
        const newProduct = {
            name:selectedName,
            price:selectedPrice,
            sizes:size,
            categories:category,
            img:image
        }
        return newProduct
    }
    const sendProduct = () => {
        dispatch(createProduct(createNewProduct()))
        window.location.reload()
    }
    const products = useSelector(state => state.products.products)
    const sizes = useSelector(state => state.sizes.sizes).map(size => size.name)
    const categories = useSelector(state => state.categories.categories).map(size => size.name)

    return (
            <div className='products-create'>
                <div>
                    <input
                        value={selectedName}
                        onChange={(e) => setSelectedName(e.target.value)}
                        type="text"
                        className='dropdown__item'
                        placeholder='Product Name'
                    />
                    <input
                        value={selectedPrice}
                        onChange={(e) => setSelectedPrice(e.target.value)}
                        type="number"
                        min={1}
                        className='dropdown__item'
                        placeholder='Product Price'
                    />
                    <label htmlFor="input-file" className="custom-file-upload dropdown__item">
                        {image ? image.name : "Select File"}
                    </label>
                    <input
                        id="input-file"
                        onChange={changeHandler}
                        type="file"
                        placeholder='Product Img'
                    />
                    <Dropdown
                        selected={selectedSize}
                        setSelected={setSelectedSize}
                        obj={sizes}
                        onClick={(e) => handleSizes(e)}
                    />
                    <Dropdown
                        closable={false}
                        selected={selectedCategory}
                        setSelected={setSelectedCategory}
                        obj={categories}
                        onClick={(e) => handleCat(e)}
                    />
                </div>
                <div className="admin__product">
                    <h3 className="product__info">Name: {createNewProduct().name}</h3>
                    <span className="product__info">Price: {createNewProduct().price} $</span>
                    <span className="product__info">Sizes: {createNewProduct().sizes}</span>
                    <span className="product__info">Categories: {createNewProduct().categories}</span>
                    {image ? <img className="product__info product__img" src={selectedImgUrl} alt="Product img"/> : false}
                </div>
                <MyBtn
                    type='submit'
                    onClick={
                            () => sendProduct()
                    }
                    className='admin__btn'
                >
                    Add
                </MyBtn>
            </div>
    );
};

export default CreateProduct;