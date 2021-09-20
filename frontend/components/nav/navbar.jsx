import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class Navbar extends React.Component {
    render() {
        return (

            <header id='nav-bar'>
            <div id='nav-logo'>
                    <Link to='/' id='link'><img src="https://github.com/jangcla/Animezon/blob/cartComp/photos/Screen%20Shot%202021-09-08%20at%201.48.27%20AM.png?raw=true" id='anime-home' /></Link>
            </div>
            
            <div id="location-selecting">
                    <Link to='/error/underdevelopment' id='loc-li'><img src="https://github.com/jangcla/Animezon/blob/cartComp/photos/nav-bar-tag.jpeg?raw=true" id='loc-nav'/><big>Select your address</big></Link>
            </div>

            <div id='search-div'>
                    <select id="search-select">
                        <option value="0">All</option>
                        <option value="1">Anime</option>
                        <option value="2">Manga</option>
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