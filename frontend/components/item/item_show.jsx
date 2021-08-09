import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../nav/navbar';


class ItemShow extends React.Component {
    componentDidMount() {
        this.props.fetchItem(this.props.match.params.itemId)
    }

    render() {
        return this.props.item ? 

        (
            <div id="item-show-component">
                <Navbar/>
                <div id='item-show'>
                    <div id="display">
                        <img src={this.props.item.photoUrl} id='main-display'/>
                    </div>

                    <div id="item-info">
                        info here
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

                        <div id="stock">
                            
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