import React, { useContext } from 'react'
import './CheckoutProduct.css'
import { dispatchContext } from '../App'

function CheckoutProduct({ id, title, price, rating, image }) {
    const dispatch = useContext(dispatchContext)
    return (
        <div className='checkoutProduct'>
            <div className='checkoutProduct__image'>
                <img src={image} alt='pdt' />
            </div>
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>£</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating).fill().map((_) => <span>⭐</span>)}
                </div>
                <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', id: id })}>REMOVE FROM CART</button>
            </div>
        </div >
    )
}

export default CheckoutProduct