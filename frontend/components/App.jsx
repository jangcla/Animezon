import React from "react";
import LogInFormContainer from './session_form/login_form_container'
import SignUpFormContainer from './session_form/signup_form_container'
import HomePageContainer from "./home/home_page_container";
import ItemShowContainer from "./item/item_show_container"
import {Route, HashRouter, Switch} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import CartContainer from "./cart/cart_container";
import UnderConstruction from "./developing/unavailable";
import ItemAdded from "./cart/cart_item_add";


const App = () => (
    <div id='main-div'>
        <Switch>
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <AuthRoute path="/login" component={LogInFormContainer} />
            <Route exact path="/cart" component={CartContainer}/>
            <Route exact path="/added" component={ItemAdded}/>
            <Route exact path="/items/:itemId" component={ItemShowContainer}/>
            <Route exact path='/error/underdevelopment' component={UnderConstruction}/>
            <Route exact path="/" component={HomePageContainer}/>
        </Switch>
    </div>
);

export default App;