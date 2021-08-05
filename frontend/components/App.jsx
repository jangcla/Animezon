import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LogInFormContainer from './session_form/login_form_container'
import SignUpFormContainer from './session_form/signup_form_container'
import HomePageContainer from "./home/home_page_container";
import {Route, HashRouter} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
    <div id='main-div'>
        {/* <header id='nav-bar'>
            <div>
                <h2>Animezon</h2>
            </div>
           
        <GreetingContainer/>

        </header> */}
        
        

        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <AuthRoute path="/login" component={LogInFormContainer} />
        <Route exact path="/" component={HomePageContainer}/>
    </div>
);

export default App;