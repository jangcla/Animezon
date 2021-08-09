import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../nav/navbar';


class ItemShow extends React.Component {
    componentDidMount() {
        this.props.fetchItem(this.props.match.params.itemId)
    }

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
                            <img src={this.props.item.photoUrl} id='main-display'/>
                        </div>
                    </div>

                    <div id="item-info">
                        <h1>{this.props.item.name}</h1>

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

                    <div id="to-cart">
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
                            
                            <select id="quantity">
                                <option value="1">Qty: 1</option>
                                <option value="2">Qty: 2</option>
                                <option value="3">Qty: 3</option>   
                            </select>
                        </div>

                        <div id="to-cart-buttons">
                            <button id='add-to'>Add to Cart</button>
                            <button id='buy-now'>Buy Now</button>
                        </div>
                        
                    </div>

                </div>
            </div>
            )
        :
        null;
    }
}

export default ItemShow;