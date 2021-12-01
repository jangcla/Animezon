import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { useHistory } from 'react-router-dom';


const Greeting = ({currentUser, itemTotal, logout}) => {
    const history = useHistory();

    function loggingOut(e) {
        e.preventDefault();
        history.push({ pathname: `/`});
        logout();
    };

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
            <Link to='/profile/personal' id='nav-to-profile'>
                View Profile
            </Link>

            <div id='greeting'>
                <div className="header-button" onClick={loggingOut} id='log-out'>
                    <small id='uppercase'>Hello, {currentUser.email.split('@')[0]}</small>
                    <br />
                    <big>Account & Lists</big>
                </div>
            </div>
            
            <Link to='/cart' id="cart-link">
                <div >
                    <img src="https://github.com/jangcla/Animezon/blob/cartComp/photos/cart-link-logo.png?raw=true" id="cart-img"/>
                </div>
                <div id="cart-amount">{itemTotal}</div> 
                <div id="cart-title">Cart</div> 
            </Link>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks()

};

export default Greeting;