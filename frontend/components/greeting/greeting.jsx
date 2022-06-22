import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';


const Greeting = ({currentUser, itemTotal, logout, fetchReviews}) => {
    const [dropdown, setDropdown] = useState(false);
    const history = useHistory();

    function loggingOut(e) {
        e.preventDefault();
        history.push({ pathname: `/`});
        logout();
    };

    const dropDown = (e) => {
        e.preventDefault();
        setDropdown(!dropdown);
    };

    const sessionLinks = () => (
        <nav className = 'header-group'>
            {/* <button><Link to = '/login' id='auth-link'>Login</Link></button>
            &nbsp;or&nbsp; */}
            {/* <Link to='/error/underdevelopment' id='nav-to-profile'>
                About Project
            </Link> */}

            <div id="greeting" onClick={dropDown}>
                <div className="sign-in">
                    <small id='uppercase'>Hello, Sign in</small>
                    <br />
                    <big id='acc-lists'>Account & Lists</big>
                </div>
            </div>

            {
                dropdown === true ? 
                    <div id='nav-dropdown'>
                        <Link to='/login' id='hover-signin-btn'>
                            Sign In
                        </Link>
                        <small>
                            New to Animezon? <Link to='/signup' id='blue-link'>Start here</Link>
                        </small>
                    </div>
                :
                    null
            }
            
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
            {/* <Link to='/error/underdevelopment' id='nav-to-profile'>
                About Project
            </Link> */}

            <div id='greeting'>
                <div className="header-button" onClick={dropDown} id='log-out'>
                    <small id='uppercase'>Hello, {currentUser.email.split('@')[0]}</small>
                    <br />
                    <big id='acc-lists'>Account & Lists</big>
                </div>
            </div>

            {
                dropdown === true ?
                    <div id='nav-dropdown'>
                        <Link to='/profile/personal' id='hover-signin-btn'>
                            View Profile
                        </Link>
                        <small>
                            <Link id='blue-link' onClick={loggingOut}>Log Out</Link>
                        </small>
                    </div>
                    :
                    null
            }
            
            <Link to='/cart' id="cart-link">
                <div id='cart-div-icon'>
                    <div id="cart-amount">{itemTotal}</div> 
                    <img src="https://github.com/jangcla/Animezon/blob/cartComp/photos/cart-link-logo.png?raw=true" id="cart-img"/>
                </div>
                <div id="cart-title">Cart</div> 
            </Link>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks()

};

export default Greeting;