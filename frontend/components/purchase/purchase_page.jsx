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
                {console.log(this.props.myItems)}
                {
                    this.props.myItems.map(myItem => < PurchasePreview item={myItem} key={myItem.id}/> )
                }

                Are you sure you want to buy these? Is your wallet full of money?
                <button onClick={this.purchaseAllItems}>
                    Buy it all!!!!
                </button>
            </div>
        </div>
        )
    }
}

export default PurchasePage;