import React from 'react';
import Order from './Order/Order'

const Orders = ({orders}) => {
    return (
        <div className='orders'>
            {orders.map((order, i) => <Order key={i} order={order} i={i}/>)}
        </div>
    );
};

export default Orders;