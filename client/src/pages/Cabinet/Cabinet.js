import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {checkAuth, logoutUser, setLoadingTrue} from "../../feature/user/userSlice";
import {useNavigate} from "react-router-dom";
import {getAllOrders} from "../../feature/orders/ordersSlice";
import Orders from "../../components/Orders/Orders";

const Cabinet = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLogin, setIsLogin] = useState(true)

    useLayoutEffect(() => {
        dispatch(getAllOrders())
        dispatch(checkAuth())
    },[isLogin])


    const orders = useSelector(state => state.orders.orders)


    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }


    const mail = getCookie('email')

    const logout = async () => {
        await dispatch(logoutUser())
        navigate("/")
        setIsLogin(false)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }
    return (
        <div className='cabinet'>
            <button className='cabinet__btn' onClick={e => logout(e)}>Exit</button>
            <h2 className='cabinet__title'>{mail}</h2>
            {orders && <Orders orders={orders}/>}
        </div>
    );
};

export default Cabinet;