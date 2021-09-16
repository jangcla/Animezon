import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../nav/navbar';
import ItemAdd from './ItemAdded';

class ItemAdded extends React.Component {
    componentDidMount() {
        this.props.fetchCarts()
    }

    render() {
        return this.props.last ? 
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

                        <div id="cart-box">
                            {
                                this.props.last.map(addedItem => <ItemAdd addItem={addedItem} key={addedItem.id} mine={this.props.mine}/>)
                            }
                           <h1>Item has been succesfully added to your cart.</h1>
                                
                        </div>
                    </div>

                    <div id="cart-right-div">
                        <div id="cart-item-all-checkout">
                            <p>Continue to shop or go to cart?</p>
                            <Link to='/cart'>Go to Cart</Link>
                            <Link to='/'>Continue Browsing</Link>

                        </div>

                    </div>
                </div>
            </div>
        )
        :
        null;
    }
}

export default ItemAdded;