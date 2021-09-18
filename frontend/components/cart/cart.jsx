import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../nav/navbar'
import CartItem from './cart_item'

class Cart extends React.Component {

    componentWillMount() {
        this.props.fetchCarts()
    }

    render() {
        return this.props.mine ? 
        (
            <div>
                <Navbar/>
                <div id="main-cart-comp">

                    <div id="cart-left-div">
                        <div id="cart-ad-holder">
                            <div id="cart-ad">
                                <h3>Try Out Animezon Premium</h3> 
                            </div>

                        </div>

                        <div id="cart-box">
                            <div id="cart-box-title">
                                <div id='title-title'>Shopping Cart <br /> <h3 id='shop-more'>Shop more items</h3></div>
                                <h5 id='title-price-cart'>Price</h5>
                            </div>

                            <div id="individual-cart-item">
                                {
                                    this.props.mine.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id} deleteCart={this.props.deleteCart} updateCart={this.props.updateCart}/>)
                                }

                                <div id="divider" />
                            </div>

                            <div id='cart-box-subtotal'>
                                <p id='bottom-of-cart-total'>Subtotal ({this.props.mine.length} items): <small id='money-total'> ${this.props.sumTotal}</small></p> 
                            </div>
                        </div>
                    </div>

                    <div id="cart-right-div">
                        <div id="cart-item-all-checkout">
                                <p>Subtotal ({this.props.mine.length} items): <small id='money-total'>${this.props.sumTotal}</small></p>

                                <p id='buy-for-yourself'>📦 This order is a gift for yourself</p>

                                <Link to='/error/underdevelopment' id='proceed-to-checkout-button'>Proceed to checkout</Link>
                        </div>

                        <div id='cart-reccs'>
                               <h4>Customers also shopped for these similar items:</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
        :
        (
            <div>hello this broke</div>
        );
    }
}

export default Cart;