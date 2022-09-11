import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import './Admin.scss'

import Categories from "../../components/Categories/Categories";
import DeleteProduct from "./Product/DeleteProduct";
import CreateProduct from "./Product/CreateProduct";

const Admin = () => {
    const {pathname} = useLocation()
    return (
        <div className='section-inner admin'>
            <div className="admin__header">
                <NavLink className={({ isActive }) => (isActive ? "link link-active" : "link")} to='/admin/category'>
                    Create category
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "link link-active" : "link")} to='/admin/product/create'>
                    Create product
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "link link-active" : "link")} to='/admin/product/delete'>
                    Delete product
                </NavLink>
            </div>
            <div className="admin__content">
                    {
                        pathname === '/admin/product/create' ?
                                <CreateProduct/>
                            :
                            (
                                pathname === '/admin/product/delete' ? (
                                    <DeleteProduct/>
                                ) : <Categories/>
                            )
                    }
            </div>
        </div>
    );
};

export default Admin;