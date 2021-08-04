import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const sessionLinks = () => (
        <nav className = 'login-signup'>
            <button><Link to = '/login'>Login</Link></button>
            &nbsp;or&nbsp;
            <button><Link to = '/signup'>Signup</Link></button>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group"> 
            <h2 className="header-name">Hello, {currentUser.email}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );
    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;