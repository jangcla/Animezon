import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../nav/navbar'
import CartItemContainer from './cart_item_container'

class Cart extends React.Component {

    componentDidMount() {
        this.props.fetchCarts()
    }compo

    render() {
        return this.props.mine ? 
        (
            <div>
                <Navbar/>
                <div>Hello Testing</div>
                <div>{this.props.mine.length}</div>
                <div id="cart-item-comp">
                    {
                        this.props.mine.map(cartItem => <CartItemContainer cartItem={cartItem} key={cartItem.id}/>)
                    }
                </div>
            </div>
        )
        :
        null;
    }
}

export default Cart;