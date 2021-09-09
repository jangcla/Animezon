import React from 'react'
import { Link } from 'react-router-dom'

class CartItem extends React.Component {
    constructor(props){
        super(props);

        this.deleteSubmit = this.deleteSubmit.bind(this);
    }

    deleteSubmit(e) {
        e.preventDefault();

        this.props.deleteCart(this.props.cartItem.id)
    }

    render() {
        return (
            <div>
                <div id="divider"/>

                {this.props.cartItem.title}
                {this.props.cartItem.id}
                
                <div>
                    <button onClick={this.deleteSubmit} id='cart-item-delete'>Delete</button>
                </div>

            </div>
        )
    }
}

export default CartItem