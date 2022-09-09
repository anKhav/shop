import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {createCategory, deleteCategory, getCategories} from "../../feature/category/categorySLice";

const Categories = () => {

    const [category, setCategory] = useState({name:''})

    const categories = useSelector(state => state.categories.categories)
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(getCategories())
    },[dispatch])
    let categoriesNames = categories.map(cat => cat.name)

    const creatCategory = () => {
        dispatch(createCategory(category))
    }

    const delCategory = () => {
        dispatch(deleteCategory(category))
        console.log(categoriesNames)
    }
    const chooseCategory = (e) => {
        setCategory({name:e.target.innerText})
    }
    return (
        <form className="category">
            <input
                value={category.name}
                type="text"
                className='admin__input'
                placeholder='Category'
                onChange={(e) => {
                    setCategory({name:e.target.value})
                }}
            />
            <ul className="category__list">
                {categoriesNames.map(cat => {
                    return (
                        <li
                            key={Math.random()}
                            className="category__item"
                            onClick={(e) => chooseCategory(e)}
                        >
                            {cat}
                        </li>
                    )
                })}
            </ul>
            <div className="category__btns">
                <button className="category__btn" onClick={(e) => creatCategory(e)}>Add</button>
                <button className="category__btn" onClick={(e) => delCategory(e)}>Delete</button>
            </div>
        </form>
    );
};

export default Categories;