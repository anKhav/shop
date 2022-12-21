import React, {useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {checkAuth, deleteUser, logoutUser} from "../../features/user/userSlice";
import {useNavigate} from "react-router-dom";
import {clearOrders, getAllUserOrders} from "../../features/orders/ordersSlice";
import Orders from "../../components/Orders/Orders";

const Cabinet = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLogin, setIsLogin] = useState(true)
    const {user} = useSelector(state => state.user)

    useLayoutEffect(() => {
        dispatch(getAllUserOrders())
        dispatch(checkAuth())
    },[isLogin])


    const orders = useSelector(state => state.orders.orders)



    const logout = async () => {
        navigate("/")
        await dispatch(logoutUser())
        await dispatch(clearOrders())
        setIsLogin(false)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    // const deleteAccount = async () => {
    //     await dispatch(deleteUser(user.id))
    //     await dispatch(clearOrders())
    //     navigate("/")
    //     setIsLogin(false)
    //     window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    // }
    return (
        <div className='cabinet'>
            <button className='cabinet__btn' onClick={e => logout(e)}>Exit</button>
            {/*<button className='cabinet__btn' onClick={e => deleteAccount(e)}>Delete Account</button>*/}
            <h2 className='cabinet__title'>{user.email}</h2>
            {orders && <Orders orders={orders}/>}
        </div>
    );
};

export default Cabinet;