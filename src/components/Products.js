import React from 'react'
import Product from './Product'
import './Products.css'
import { initialState } from '../reducer'

function Products() {
    return (
        <section className='products'>
            <div className='container'>
                <div className='products__d-flex'>
                    {initialState.products.map((p) => <Product id={p.id} title={p.title} price={p.price} rating={p.rating} image={p.image} />)}
                </div>
            </div>
        </section>
    )
}

export default Products