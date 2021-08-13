import React from "react";
import LogInFormContainer from './session_form/login_form_container'
import SignUpFormContainer from './session_form/signup_form_container'
import HomePageContainer from "./home/home_page_container";
import ItemShowContainer from "./item/item_show_container"
import {Route, HashRouter} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import PhotoSlider from "./slider/photo_slider";
import UnderConstruction from "./developing/unavailable";

const App = () => (
    <div id='main-div'>
        

        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <AuthRoute path="/login" component={LogInFormContainer} />
        <Route exact path="/items/:itemId" component={ItemShowContainer}/>
        <Route exact path='/error/underdevelopment' component={UnderConstruction}/>
        <Route exact path="/" component={HomePageContainer}/>
    </div>
);

export default App;