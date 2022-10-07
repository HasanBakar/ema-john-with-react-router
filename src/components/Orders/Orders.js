import React from 'react';
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Cart from '../Cart/Cart';
import ReviewOrder from '../ReviewOrder/ReviewOrder';

const Orders = () => {
    const {products, initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart)
    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewOrder
                    key={product.id}
                    product={product}
                    ></ReviewOrder>)
                }
            </div>
        
            <div className='cart-container'>
                 <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;