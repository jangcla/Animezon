import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';

const Greeting = ({currentUser, logout}) => {
    const sessionLinks = () => (
        <nav className = 'login-signup'>
            <button><Link to = '/login' id='auth-link'>Login</Link></button>
            &nbsp;or&nbsp;
            <button><Link to = '/signup' id="auth-link">Signup</Link></button>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group"> 
            <div id='greeting'>
                <h5 className="header-name">Hello, {currentUser.email}!</h5>
                <button className="header-button" onClick={logout} id='log-out'>Log Out</button>
            </div>
            
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks()

};

export default Greeting;