import React, {useEffect} from 'react';
import './Orders.scss'
import {useDispatch, useSelector} from "react-redux";
import {getAllOrders} from "../../../features/orders/ordersSlice";
import {checkAuth} from "../../../features/user/userSlice";

const Orders = () => {
    const dispatch = useDispatch()
    const allOrders = useSelector(state => state.orders.allOrders)
    useEffect(()=>{
        dispatch(getAllOrders())
        dispatch(checkAuth())
    },[])
    console.log(allOrders);
    return (
        <div className='orders'>
            <div>
                order1
            </div>
            <div>
                order2
            </div>
        </div>
    );
};

export default Orders;