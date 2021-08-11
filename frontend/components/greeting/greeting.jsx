import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';

const Greeting = ({currentUser, logout}) => {
    const sessionLinks = () => (
        <nav className = 'login-signup'>
            {/* <button><Link to = '/login' id='auth-link'>Login</Link></button>
            &nbsp;or&nbsp; */}
            <Link to = '/signup' id="auth-link">
                <small>Hello, Sign in</small>
                <br />
                <big>Account & Lists</big>
            </Link>
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
            
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks()

};

export default Greeting;