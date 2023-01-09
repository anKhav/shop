import React from 'react';
import {Link, NavLink, useLocation} from "react-router-dom";

import Categories from "../../components/Categories/Categories";
import DeleteProduct from "./Product/DeleteProduct";
import CreateProduct from "./Product/CreateProduct";

import './Admin.scss'


const Admin = () => {
    const {pathname} = useLocation()

    return (
        <div className='section-inner admin'>
            <div className="admin__wrapper">
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
                <Link to='/admin/orders'>Orders</Link>
            </div>
        </div>
    );
};

export default Admin;