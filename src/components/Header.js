import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Header.css';
import { stateContext } from '../App';
import { auth } from '../firebase';
function Header() {
    const state = useContext(stateContext)
    function signout() {
        if (state.user) {
            auth.signOut()
        }
    }
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
                        <Link to={!state.user && "/login"} className='header__link'>
                            <div onClick={signout}>
                                <p className='header__optionLineOne'>Hello {state.user?.email}</p>
                                <p className='header__optionLineTwo'>{state.user ? 'Sign out' : 'Sign in'}</p>
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