import React from 'react';
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Cart from '../Cart/Cart';

const Orders = () => {
    const {products, initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart)
    return (
        <div>
            <div className='shop-container'>
                <div className='products-container'>

                </div>
            </div>
            <div className='cart-container'>
                 <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;