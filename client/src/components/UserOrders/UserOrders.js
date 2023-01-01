import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllUserOrders} from "../../features/orders/ordersSlice";
import Order from "../Orders/Order/Order";

const UserOrders = () => {
    const dispatch = useDispatch()
    const orders = useSelector (state => state.orders.orders)
    console.log(orders);
    useEffect(() => {
        dispatch(getAllUserOrders())
    }, [])
    return (
        <div>
            {orders.map((order, i) => <Order key={i} order={order} i={i}/>)}
        </div>
    );
};

export default UserOrders;