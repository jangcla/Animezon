import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';

const Greeting = ({currentUser, mine, logout, name}) => {
    const sessionLinks = () => (
        <nav className = 'login-signup'>
            {/* <button><Link to = '/login' id='auth-link'>Login</Link></button>
            &nbsp;or&nbsp; */}
            <div id="auth-link">
                <Link to = '/signup' id="auth-link">
                <small>Hello, Sign in</small>
                <br />
                <big>Account & Lists</big>
                </Link>
            </div>
            
            <Link to='/login' id="cart-link">
                <div >
                <img src="https://www.pngkey.com/png/full/307-3071593_accessories-shopping-cart-icon-white.png" id='cart-img'/>
                </div>
                {/* <div id="cart-amount">{mine.length}</div> */}
                <div id="cart-title">Cart</div> 
            </Link>
            
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group"> 
            <div id='greeting'>
                <button className="header-button" onClick={logout} id='log-out'>
                    <small id='uppercase'>Hello, {name}</small>
                    <br />
                    <big>Account & Lists</big>
                </button>
            </div>
            
            <Link to='/cart' id="cart-link">
                <div >
                <img src="https://www.pngkey.com/png/full/307-3071593_accessories-shopping-cart-icon-white.png" id="cart-img"/>
                </div>
                <div id="cart-amount">{mine.length}</div> 
                <div id="cart-title">Cart</div> 
            </Link>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks()

};

export default Greeting;