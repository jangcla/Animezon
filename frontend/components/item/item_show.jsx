import React from 'react';
import { Link } from 'react-router-dom';
import CreateCartItem from '../item_add/cart_create';
import Navbar from '../nav/navbar';
import ItemCompartmentContainer from './item_compartment_container';


class ItemShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     user_id: `${this.props.user}`,
        //     item_id:  `${this.props.match.params.itemId}`,
        //     quantity:  1,
        //     purchased: false,
        //     title: `${this.props.item.name}`,
        //     photoUrl: `${this.props.item.photoUrl}`,
        //     price: `${this.props.item.price}`
        // }

        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // update(field) {
    //     return e => this.setState({
    //         [field]: e.currentTarget.value
    //     });
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const cartItem = Object.assign({}, this.state);
    //     console.log(cartItem)
    //     this.props.createCart(cartItem);
    //     this.props.history.push('/added');
    // }

    UNSAFE_componentWillMount(){
        this.props.fetchItem(this.props.match.params.itemId)
    }


    componentDidUpdate(prevProps,prevState) {
        if(prevProps.location !== this.props.location){
            this.props.fetchItem(this.props.match.params.itemId);
        }
    }

    
    



    // componentWillUnmount() {
    //     this.props.fetchItem(this.props.match.params.itemId)
    // }


    render() {
        return (this.props.item && this.props.item.availability) ? 

        (
            <div id="item-show-component">
                <Navbar/>
                <div id='item-show'>
                    <div id="display">
                        <div id="side-display">
                            <button><img src={this.props.item.photoUrl} id="button-img"/></button>
                        </div>

                        <div id="main-display">
                            <img src={this.props.item.photoUrl} id='main-photo'/>
                        </div>
                    </div>

                    <div id="item-info">
                        <h1>{this.props.item.name}</h1>
                            <h5><big>Type:</big> <Link to='/error/underdevelopment' id='li'><big id='uppercase'>{this.props.item.type_tag}</big></Link></h5>
                        <div id='divider'/>
                        <br />

                        <div id="info-price">
                            <p>Price:</p>
                            <p id='price-num'>${this.props.item.price}</p>  
                        </div>  

                        <div id='divider'/>
                        <br />

                        <div id='item-description'>
                            <h4>About this item</h4>
                            <p>{this.props.item.description}</p>
                        </div>  

                    </div>

                    <CreateCartItem user={this.props.user} item={this.props.item} createCart={this.props.createCart} history={this.props.history}/>

                    {/* <div id="to-cart">
                        <div id="price"> 
                            <p id='buy-new'>Buy new:</p>
                            <p id='price-num'>${this.props.item.price}</p>
                        </div>

                        <div id="shipping">
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/dex/2019/PrimeDelivery/DEX_2019_Prime_PrimeDelivery_LP_1DC_250x170._CB1567810397_.jpg" id='prime-ship-logo'/>

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
                                <img src="https://icons-for-free.com/iconfiles/png/512/location-131965017472890605.png" id="location"/><Link to="/" id="li">Select delivery location</Link>
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
                    </div> */}

                </div>
                   <ItemCompartmentContainer/>
            </div>
            )
        :
        null;
    }
}

export default ItemShow;