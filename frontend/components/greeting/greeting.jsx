import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';

const Greeting = ({currentUser, logout}) => {
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
            
            <div id="cart-link">
                <Link to='/login'>
                <img src="https://www.pngkey.com/png/full/307-3071593_accessories-shopping-cart-icon-white.png" id='cart-img'/>
                </Link>
            </div>
            
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group"> 
            <div id='greeting'>
                <button className="header-button" onClick={logout} id='log-out'>
                    <small>Hello, {currentUser.email}</small>
                    <br />
                    <big>Account & Lists</big>
                </button>
            </div>
            
            <div id="cart-link">
                <Link to='/error/underdevelopment'>
                <img src="https://www.pngkey.com/png/full/307-3071593_accessories-shopping-cart-icon-white.png" id="cart-img"/>
                </Link>
            </div>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks()

};

export default Greeting;