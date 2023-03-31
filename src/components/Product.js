import React, { useContext } from 'react'
import './Product.css'
import { dispatchContext } from '../App'

function Product({ id, title, price, rating, image }) {
    const dispatch = useContext(dispatchContext)
    return (
        <div className='product col-s-6 col-l-4 col-xl-3'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>£</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {
                        Array(rating).fill().map((_) => <span>⭐</span>)
                    }
                </div>
            </div>
            <img src={image} alt='pdt' />
            <button onClick={() => dispatch({ type: 'ADD_PRODUCT', id: id })}>ADD TO CART</button>
        </div>
    )
}

export default Product
