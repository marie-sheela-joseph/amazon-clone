import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Header.css';
import { stateContext } from '../App';
function Header() {
    const state = useContext(stateContext)
    return (
        <div>
            <header className='header'>
                <nav>
                    <div className='header__logo'>
                        <Link to={'/'}>
                            <img src='./assets/logo.png' alt='amazon' />
                        </Link>
                    </div>
                    <div className='header__search'>
                        <input type={"text"} value="" />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className='header__nav'>
                        <Link to={"/login"} className='header__link'>
                            <div>
                                <p className='header__optionLineOne'>Hello</p>
                                <p className='header__optionLineTwo'>Sign out</p>
                            </div>
                        </Link>
                        <Link to={"/checkout"} className='header__link'>
                            <div className='header__cart'>
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span className='header__optionLineTwo'>{state.cart.length}</span>
                            </div>
                        </Link>
                    </div>
                </nav>
            </header>
            <Outlet />
        </div>
    )
}
export default Header