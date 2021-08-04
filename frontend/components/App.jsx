import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LogInFormContainer from './session_form/login_form_container'
import SignUpFormContainer from './session_form/signup_form_container'
import {Route, HashRouter} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
    <div>
        <header id='nav-bar'>
            <div>
                <h1>Animezon <img src="https://decor.bruiloftideeen.com/images/urban-ninja-anime-art-1440x2560-wallpaper.jpg?s=woipHE27tE" height='80px'/></h1>
            </div>
            <GreetingContainer/>
        </header>
        
        

        <AuthRoute path="/login" component={LogInFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
    </div>
);

export default App;