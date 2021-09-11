import React from 'react'
import { Link } from 'react-router-dom'

class CartItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            quantity: `${this.props.cartItem.quantity}`
        }

        this.deleteSubmit = this.deleteSubmit.bind(this);
    }

    deleteSubmit(e) {
        e.preventDefault();

        this.props.deleteCart(this.props.cartItem.id)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        return (
            <div id='cart-item-main-holder'>
                <div id="divider"/>

                <div id="main-cart-item-container">
                    <Link to={`/items/${this.props.cartItem.item_id}`} id="c-i-photo">
                        {/* {this.props.photoUrl} */}
                        <img src={this.props.cartItem.photoUrl} id='main-c-i-photo'/>
                    </Link>

                    <div id="cart-item-info">
                        <div id="c-i-info">
                            <div id="title-and-price">
                               <h2>
                                   <Link to={`/items/${this.props.cartItem.item_id}`} id='c-i-title-link'>{this.props.cartItem.title}</Link>
                               </h2> 

                                <h3 >$ {this.props.cartItem.price * this.state.quantity}</h3>
                            </div>

                            <small id='small-stock'>In Stock</small>

                            <small id='small-free'>FREE Returns</small>   
                            
                            <small>Shipped from: Animezon</small>

                            <small>Gift options not available. </small>

                        </div>
                        {/* {this.props.cartItem.id} */}
                        
                        <div id='select-delete'> 
                            <select id="c-i-quantity" onChange={this.update('quantity')}>
                                <option value={this.props.cartItem.quantity}>
                                    - Qty: {this.props.cartItem.quantity} -
                                </option>
                                <option value={1} >Qty: 1</option>
                                <option value={2} >Qty: 2</option>
                                <option value={3} >Qty: 3</option>
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