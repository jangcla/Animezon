import React from "react";
import { Link } from "react-router-dom";

const SubNav = () => {
    const scrollToBottom = (e) => {
        e.preventDefault();
        
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'auto'
        });
    }; 

    return (
        <div id="sub-nav-bar">
            <div id="search-link-to-main-items">
                <Link to={'/search/ '} id='subnav-links'>
                    <img src="https://icon-library.com/images/menu-icon-white/menu-icon-white-2.jpg" id="nav-logo-all"/> All
                </Link>
                <Link to={'/search/anime'} id='subnav-links'>
                    Animes
                </Link>
                <Link to={'/search/manga'} id='subnav-links'>
                    Mangas
                </Link>
                <Link to={'/search/merch'} id='subnav-links'>
                    Merchendise
                </Link>
            </div>
            
            <div onClick={scrollToBottom} id="to-bottom-footer">
                Learn more about Animezon 
            </div>
        </div>
    )
};

export default SubNav;