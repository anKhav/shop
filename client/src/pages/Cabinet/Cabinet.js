import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logoutUser, setLoadingTrue} from "../../feature/user/userSlice";
import {useNavigate} from "react-router-dom";
import {getAllOrders} from "../../feature/orders/ordersSlice";

const Cabinet = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllOrders())
    },[])

    const orders = useSelector(state => state.orders.orders)

    console.log(orders)

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }


    const mail = getCookie('email')

    const logout = async (e) => {
        await dispatch(logoutUser())
        navigate("/")
        dispatch(setLoadingTrue())
        window.location.reload()
    }
    return (
        <div>
            {`Cabinet ${mail}`}
            {orders && <div>{orders.map((order, i) => <li>{order.products.map(product => <li>{JSON.parse(product).name}</li>)}</li>)}</div>}
            <button onClick={e => logout(e)}>Exit</button>
        </div>
    );
};

export default Cabinet;