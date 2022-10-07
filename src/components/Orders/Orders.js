import React from 'react';
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Cart from '../Cart/Cart';
import ReviewOrder from '../ReviewOrder/ReviewOrder';
import {removeFromDb} from '../../utilities/fakedb';

const Orders = () => {

    const {products, initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const handleRemoveItem = (id) =>{
        const remainingCart = cart.filter(product => product.id !== id);
        setCart(remainingCart);
        removeFromDb(id);
    }

    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewOrder
                    key={product.id}
                    product={product}
                    handleRemoveItem ={handleRemoveItem}
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