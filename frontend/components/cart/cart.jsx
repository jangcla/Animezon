import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../nav/navbar'
import CartItem from './cart_item'

class Cart extends React.Component {

    componentDidMount() {
        this.props.fetchCarts()
    }compo

    render() {
        return this.props.mine ? 
        (
            <div>
                <Navbar/>
                <div id="main-cart-comp">
                    <div id='uppercase'>Hello {this.props.name}</div>
                    <div>{this.props.mine.length}</div>
                    <div id="cart-item-comp">
                        {
                            this.props.mine.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id} deleteCart={this.props.deleteCart}/>)
                        }
                    </div>
                </div>
            </div>
        )
        :
        null;
    }
}

export default Cart;