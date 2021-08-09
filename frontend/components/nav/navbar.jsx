import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class Navbar extends React.Component {
    render() {
        return (

            <header id='nav-bar'>
            <div id='nav-logo'>
                <Link to='/' id='link'><img src="https://i.pinimg.com/originals/89/78/60/897860ca8b370f7e56be6208111080ad.jpg" id='anime-home' /></Link>
            </div>

            <div>
                    <select id="search-select">
                        <option value="0">All</option>
                        <option value="1">Anime</option>
                        <option value="2">Acc</option>
                        <option value="3">Merch</option>
                    </select>
                <input type="text" id="search"></input>
                <input type="button" id="search-button" value="🔎"/>
            </div>

            <GreetingContainer />

        </header>
        )
    }
}

export default Navbar;