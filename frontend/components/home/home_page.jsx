import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <header id='nav-bar'>
                <div id='nav-logo'>
                    <Link to='/' id='link'><img src="https://i.pinimg.com/originals/13/69/c2/1369c275968915fa376e534f1d0fe891.jpg" id='anime-home' /></Link>
                </div>

                <GreetingContainer />

            </header>
        )
    }
}

export default HomePage;