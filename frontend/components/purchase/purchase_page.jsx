import React from "react";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../nav/navbar";

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
                item_id: item.id
            }

            this.props.createPurchase(purchase);
            this.props.deleteCart(item.id);
        });
        this.props.history.push('/profile/personal');

        
    }

    render() {
        return (
        <div>
            <Navbar />
            Are you sure you want to buy these? Is your wallet full of money?
            <button onClick={this.purchaseAllItems}>
                Buy it all!!!!
            </button>
        </div>
        )
    }
}

export default PurchasePage;