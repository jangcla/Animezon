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
            <div id='cart-item-main-holder'>
                <div id="divider"/>

                <div id="main-cart-item-container">
                    <div id="c-i-photo">
                        {/* {this.props.photoUrl} */}
                        <img src={this.props.cartItem.photoUrl} id='main-c-i-photo'/>
                    </div>

                    <div id="cart-item-info">
                        <div id="c-i-title">
                            <Link to={`/items/${this.props.cartItem.item_id}`} id='c-i-title-link'>{this.props.cartItem.title}</Link>
                            <br />
                            <p>In Stock</p>
                            <p>Shipped from: Animezon</p>
                            <p>Gift options not available. Learn More.</p>

                        </div>
                        {/* {this.props.cartItem.id} */}
                        
                        <div>
                            <select id="c-i-quantity">
                                <option>
                                    Qauntity : {this.props.cartItem.quantity}
                                </option>
                            </select>
                            <button onClick={this.deleteSubmit} id='cart-item-delete'>Delete</button>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default CartItem