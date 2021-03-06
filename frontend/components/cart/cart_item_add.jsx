import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import Navbar from '../nav/navbar';
import ItemAdd from './ItemAdded';
import LoginFormContainer from '../session_form/login_form_container';

class ItemAdded extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        
        if (this.props.sessionId) {
            this.props.fetchCarts();
        }
    }

    render() {
        return this.props.last.length === 1 ? 
        (
            <div>
                <Navbar />
                <div id="main-cart-comp">

                    <div id="cart-left-div">
                        <div id="cart-ad-holder">
                            <div id="cart-ad">
                                <h3>Try Out Animezon Premium</h3>
                            </div>
                            

                        </div>

                        <div id="cart-box-preview">
                            {
                                this.props.last.map(addedItem => <ItemAdd addItem={addedItem} key={addedItem.id} mine={this.props.mine}/>)
                            }                                
                        </div>
                    </div>

                    <div id="cart-right-div">
                        <div id="cart-item-checkout-browse">
                            <p>Continue to shop or go to cart?</p>
                            <Link to='/cart' id='preview-add-buttons'>Proceed to Cart</Link>
                            <Link to='/' id='preview-add-buttons1'>Continue Browsing</Link>

                        </div>

                    </div>
                </div>

            </div>
        )
        :
        (
            < Redirect to='/login'/>
        );
    }
}

export default ItemAdded;