import React from 'react';
import './ReviewOrder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewOrder = ({product}) => {
    const {img,name, price, quantity, shipping} = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price: ${price}</small> </p>
                    <p><small>Shipping: ${shipping}</small> </p>
                    <p><small>Quantity: {quantity}</small> </p>

                </div>
                <div className="delete-btn">
                    <button className="delete-btn">
                         <FontAwesomeIcon className="delete-icon" icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewOrder;