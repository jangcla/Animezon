import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../nav/navbar'
import CartItem from './cart_item'
import CartSimilar from './cart_similar';

class Cart extends React.Component {

    UNSAFE_componentWillMount() {
        window.scrollTo(0, 0);
        this.props.fetchCarts();
        this.props.fetchItems();
    }

    render() {
        return this.props.mine.length !== 0 ? 
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
                                <p id='bottom-of-cart-total'>Subtotal ({this.props.itemTotal} items): <small id='money-total'> ${this.props.sumTotal.toFixed(2)}</small></p> 
                            </div>
                        </div>
                    </div>

                    <div id="cart-right-div">
                        <div id="cart-item-all-checkout">
                                <p>Subtotal ({this.props.itemTotal} items): <small id='money-total'>${this.props.sumTotal.toFixed(2)}</small></p>

                                <p id='buy-for-yourself'>📦 This order is a gift for yourself</p>

                                <Link to='/confirm/purchase' id='proceed-to-checkout-button'>Proceed to checkout</Link>
                        </div>

                        <div id='cart-reccs'>
                                <h4 id='similar-items-title'>Customers also shopped for these similar items</h4>

                                <div id='reccs-div'>
                                    {
                                        this.props.alsoItems.map(alsoItem => <CartSimilar alsoItem={alsoItem} key={alsoItem.id} />)
                                    }
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        :
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

                        <div id="cart-box-of-empty">

                            <div id="empty-cart-img">
                                    <img src="https://github.com/jangcla/Animezon/blob/cartComp/photos/cart_empty_gif.gif?raw=true" id='cart-with-items-gif'/>
                            </div>


                            <div id="individual-cart-item-empty">
                                <h2 id='is-empty-text'>Your Animezon Cart is empty</h2>

                                <Link to='/' id='try-browsing-blue'>Try browsing more items!</Link>
                            </div>

                        </div>
                    </div>

                    <div id="cart-right-div">

                        <div id='cart-reccs'>
                               <h4 id='similar-items-title'>Customers also shopped for these similar items</h4>

                                <div id='reccs-div'>
                                    {
                                        this.props.alsoItems.map(alsoItem => <CartSimilar alsoItem={alsoItem} key={alsoItem.id} />)
                                    }
                                </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;