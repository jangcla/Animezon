import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../nav/navbar';

class ItemAdded extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div id="main-cart-comp">

                    <div id="cart-left-div">
                        <div id="cart-ad-holder">
                            <div id="cart-ad">
                                <h3>Try Out Animezon Premium</h3>
                            </div>

                        </div>

                        <div id="cart-box">
                           <h1>Item has been succesfully added to your cart.</h1>
                        </div>
                    </div>

                    <div id="cart-right-div">
                        <div id="cart-item-all-checkout">
                            <p>Continue to shop or go to cart?</p>
                            <button>Go to Cart</button>
                            <button>Continue Browsing</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ItemAdded;