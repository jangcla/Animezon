import React from "react";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../nav/navbar";
import PurchasePreview from "./purchasePreview";

class PurchasePage extends React.Component {
    constructor(props) {
        super(props);

        this.purchaseAllItems = this.purchaseAllItems.bind(this);
    }


    purchaseAllItems(e) {
        e.preventDefault();
        this.props.myItems.forEach(item => {
            const purchase = {
                user_id: this.props.userId,
                item_id: item.item_id
            }

            this.props.createPurchase(purchase);
            this.props.deleteCart(item.id);
        });
        this.props.history.push('/profile/personal');

        
    }

    render() {
        return (
        <div id="purchase-confirm-container">
            <Navbar />
            <div id="purchase-main-div">
                <div id="purchase-main-left">
                    <div id="purchase-address-container">
                        <big>
                            Shipping Address
                        </big>

                        <div id="purchase-adress">
                            {this.props.userName}
                            <br />
                            1801 ANGELO DR 
                            <br />
                            BEVERLY HILLS, CA 90210
                        </div>
                    </div>

                    <div id="divider-purchase" />

                    <div id="review-items-to-purchase">
                        <h3>
                            Review Items
                        </h3>
                        {
                            this.props.myItems.map(myItem => < PurchasePreview item={myItem} key={myItem.id}/> )
                        }
                    </div>
                </div>

                <div id="purchases-main-right">
                    Are you sure you want to buy these? Is your wallet full of money?
                    <button onClick={this.purchaseAllItems}>
                        Buy it all!!!!
                    </button>
                </div>
            </div>
        </div>
        )
    }
}

export default PurchasePage;