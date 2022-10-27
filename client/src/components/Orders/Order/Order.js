import React from 'react';
import OrderProduct from "./OrderProduct/OrderProduct";

const Order = ({order, className}) => {
    const products = order.products

    return (
        <div className='order'>
            <h2 className='order__title'>{`Order ${order.id}`}</h2>
            {products.map((product,i) => <OrderProduct key={i} product={product}/>)}
        </div>
    );
};

export default Order;