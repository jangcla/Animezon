import React from 'react';
import { Link } from 'react-router-dom';

class CreateCartItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 1,   
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location !== this.props.location) {
            this.props.fetchItem(this.props.match.params.itemId)
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // const cartItem = Object.assign({}, this.state);
        if (this.props.user) {
            const cartItem = {
                user_id: `${this.props.user}`,
                item_id: `${this.props.item.id}`,
                quantity: `${this.state.quantity}`,
                purchased: false,
                title: `${this.props.item.name}`,
                photoUrl: `${this.props.item.photoUrl}`,
                price: `${this.props.item.price}`}
            this.props.createCart(cartItem);
        }
        this.props.history.push('/added');
    }

    render() {
        return(
        <div id="to-cart">
            <div id="price">
                <p id='buy-new'>Buy new:</p>
                <p id='price-num'>${this.props.item.price}</p>
            </div>

            <div id="shipping">
                    <img src="https://github.com/jangcla/Animezon/blob/cartComp/photos/prime-box.jpg?raw=true" id='prime-ship-logo' />

                <div id="same-day">
                    <p>FREE Same-Day</p>
                    <p>& FREE Returns</p>
                </div>

            </div>

            <div id="ship-info">
                <p>
                    Get Fast, Free Shippng with <Link to='/' id="li">Animezon Prime</Link>
                </p>
            </div>

            <div>
                <img src="https://icons-for-free.com/iconfiles/png/512/location-131965017472890605.png" id="location" /><Link to="/" id="li">Select delivery location</Link>
            </div>

            <div id="stock">
                <div id="in-stock">
                    In Stock.
                </div>

                <select id="quantity" onChange={this.update('quantity')}>
                    <option value={1} >Qty: 1</option>
                    <option value={2} >Qty: 2</option>
                    <option value={3} >Qty: 3</option>
                </select>
            </div>

            <div id="to-cart-buttons">
                <button id='add-to' onClick={this.handleSubmit}>Add to Cart</button>
                <button id='buy-now'>Buy Now</button>
            </div>

            <br />

            <br />
            <div id="security-link">
                <p><big>🔒</big><Link to='/error/underdevelopment' id="li">Secure Payment</Link></p>
            </div>
            <br />
            <div id="ship-info-text">
                <p>
                    <small>Ships from  </small><big>Animezon</big>
                    <br />
                    <small>Sold by     </small><big>Animezon</big>
                </p>
            </div>
        </div>
    )
    }
}

export default CreateCartItem