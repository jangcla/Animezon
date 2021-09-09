import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../nav/navbar'
import CartItem from './cart_item'

class Cart extends React.Component {

    componentDidMount() {
        this.props.fetchCarts()
    }

    render() {
        return this.props.mine ? 
        (
            <div>
                <Navbar/>
                <div id="main-cart-comp">
                    <div id='uppercase'>Hello {this.props.name}</div>
                    <div>{this.props.mine.length}</div>
                    <div id="cart-left-div">

                        <div id="cart-box">
                            <div id="cart-box-title">
                                <h1>Shopping Cart</h1>
                                <h5>Price</h5>
                            </div>

                            <div id="individual-cart-item">
                                {
                                    this.props.mine.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id} deleteCart={this.props.deleteCart}/>)
                                }

                                <div id="divider" />
                            </div>

                            <div id='cart-box-subtotal'>
                                <p>Subtotal ({this.props.mine.length} items): $$$</p> 
                            </div>
                        </div>
                    </div>

                    <div id="cart-right-div">
                        {/* Checkout Corner */}
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