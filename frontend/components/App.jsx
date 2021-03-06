import React from "react";
import LogInFormContainer from './session_form/login_form_container'
import SignUpFormContainer from './session_form/signup_form_container'
import HomePageContainer from "./home/home_page_container";
import ItemShowContainer from "./item/item_show_container"
import ProfileFormContainer from "./profile/profile_form_container";
import ProfileContainer from "./profile/profile_container";
import ReviewFormContainer from "./review/review_form_container";
import CartContainer from "./cart/cart_container";
import PurchasePageContainer from "./purchase/purchase_page_container";
import UnderConstruction from "./developing/unavailable";
import ItemAddedContainer from "./cart/cart_item_add_container";
import SearchContainer from "./search/search_container";
import Footer from "./nav/footer";
import {Route, HashRouter, Switch} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import InfoPageContainer from "./info/info_page_container";


const App = () => (
    <div id="website-container">
        <div id='main-div'>
            <Switch>
                <AuthRoute path="/signup" component={SignUpFormContainer} />
                <AuthRoute path="/login" component={LogInFormContainer} />
                <Route exact path="/cart" component={CartContainer}/>
                <Route exact path="/confirm/purchase" component={PurchasePageContainer}/>
                <Route exact path="/added" component={ItemAddedContainer}/>
                <Route exact path="/items/:itemId" component={ItemShowContainer}/>
                <Route exact path='/profile/create' component={ProfileFormContainer}/>
                <Route exact path='/profile/personal' component={ProfileContainer}/>
                <Route exact path='/review/form' component={ReviewFormContainer}/>
                <Route exact path='/search/:keyword' component={SearchContainer}/>
                <Route exact path='/about/:infoword' component={InfoPageContainer}/>
                {/* <Route exact path='/error/underdevelopment' component={UnderConstruction}/> */}
                <Route exact path="/" component={HomePageContainer}/>
                <Route path="/" component={UnderConstruction}/>
            </Switch> 
            
        </div>

        <Footer/>
    </div>

);

export default App;