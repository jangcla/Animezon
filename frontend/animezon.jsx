import React from "react";
import ReactDOM from "react-dom";
import { login, logout, signup } from "./util/session_api_util";


document.addEventListener("DOMContentLoaded", () => {
    window.login = login
    window.signup = signup
    window.logout = logout

    const root = document.getElementById('root');
    ReactDOM.render(<img src="https://decor.bruiloftideeen.com/images/urban-ninja-anime-art-1440x2560-wallpaper.jpg?s=woipHE27tE" height= '500px'/>, root);
});