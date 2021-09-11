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
                            <div id="title-and-price">
                               <h2>
                                   <Link to={`/items/${this.props.cartItem.item_id}`} id='c-i-title-link'>{this.props.cartItem.title}</Link>
                               </h2> 

                                <h3>$ {this.props.cartItem.price * this.props.cartItem.quantity}</h3>
                            </div>

                            <small>In Stock</small>
                            <br />
                            <small>Shipped from: Animezon</small>
                            <br />
                            <small>Gift options not available. </small>

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