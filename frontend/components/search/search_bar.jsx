import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";


const SearchBar = () => {
    const history = useHistory();
    const [keyword, SetKeyword] = useState(() => ' ');

    function handleKeyword(e) {
        e.preventDefault();
        history.push({ pathname: `/search/${keyword}`, state: keyword })
        // document.querySelector(".searchbar").value = ""
    }

    return(
        <form id="search-bar-form">
            <input
                type="text"
                id="search"
                placeholder="Search"
                name="s"
                onChange={(e) => SetKeyword(e.currentTarget.value)}
            />
            <button id="search-button" onClick={handleKeyword}>
                🔍
            </button>
        </form>
    )
}

export default SearchBar;