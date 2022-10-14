import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {checkAuth, logoutUser, setLoadingTrue} from "../../feature/user/userSlice";
import {useNavigate} from "react-router-dom";
import {getAllOrders} from "../../feature/orders/ordersSlice";
import Orders from "../../components/Orders/Orders";
import './Cabinet.scss'

const Cabinet = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllOrders())
        dispatch(checkAuth())
    },[])

    const orders = useSelector(state => state.orders.orders)

    console.log(localStorage)

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }


    const mail = getCookie('email')

    const logout = async () => {
        await dispatch(logoutUser())
        navigate("/")
        dispatch(setLoadingTrue())
        window.location.reload()
    }
    return (
        <div className='cabinet'>
            <h2 className='cabinet__title'>{mail}</h2>
            {orders && <Orders orders={orders}/>}
            <button className='cabinet__btn' onClick={e => logout(e)}>Exit</button>
        </div>
    );
};

export default Cabinet;