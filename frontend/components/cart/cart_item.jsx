import React from 'react'
import { Link } from 'react-router-dom'

class CartItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            id: `${this.props.cartItem.id}`,
            quantity: `${this.props.cartItem.quantity}`,
            user_id: `${this.props.cartItem.user_id}`,
            item_id: `${this.props.cartItem.item_id}`,
            purchased: false,
            title: `${this.props.cartItem.title}`,
            photoUrl: `${this.props.cartItem.photoUrl}`,
            price: `${this.props.cartItem.price}`
        }

        this.deleteSubmit = this.deleteSubmit.bind(this);
        this.updateSubmit = this.updateSubmit.bind(this);
        this.update = this.update.bind(this);
        this.doubleEvent = this.doubleEvent.bind(this);
    }

    deleteSubmit(e) {
        e.preventDefault();
        this.props.deleteCart(this.props.cartItem.id)
    }

    updateSubmit(e) {
        e.preventDefault();
        const cartItem = Object.assign({}, this.state)
        this.props.updateCart(cartItem);
    }

    update(e) {
        this.setState({
            ['quantity']: e.currentTarget.value
        });
    }

    doubleEvent(e) {
        this.update(e);
        this.updateSubmit(e);
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
                            <select id="c-i-quantity" onChange={this.doubleEvent}>
                                <option value={this.props.cartItem.quantity}>
                                    - Qty: {this.props.cartItem.quantity} -
                                </option>
                                <option value={1} >Qty: 1</option>
                                <option value={2} >Qty: 2</option>
                                <option value={3} >Qty: 3</option>
                            </select>
                            <button onClick={this.deleteSubmit} id='cart-item-delete'>Delete</button>
                            <button onClick={this.updateSubmit} id='cart-item-delete'>Save</button>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default CartItem