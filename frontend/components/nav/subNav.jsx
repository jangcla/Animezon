import React from "react";
import { Link } from "react-router-dom";

const SubNav = () => {
    const scrollToBottom = (e) => {
        e.preventDefault();
        
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'auto'
            /* you can also use 'auto' behaviour 
               in place of 'smooth' */
        });
    }; 

    return (
        <div>
            <div id="search-link">
                <Link to={'/search/ '}>
                    All
                </Link>
                <Link to={'/search/anime'}>
                    Animes
                </Link>
                <Link to={'search/manga'}>
                    Mangas
                </Link>
                <Link to={'search/merch'}>
                    Merchendise
                </Link>
            </div>
            
            <button onClick={scrollToBottom}>
                Learn more about Animezon 
            </button>
        </div>
    )
};

export default SubNav;