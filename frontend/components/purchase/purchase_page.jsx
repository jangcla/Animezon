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
            {/* <Navbar /> */}
            <div id="purchase-navbar">
                <Link to="/">
                    <img id="checkout-logo" src="https://raw.githubusercontent.com/jangcla/Animezon/cartComp/photos/login-smile.png" />
                </Link>

                <big>
                    Checkout ( <Link to="/cart" id="blue-link">{this.props.myItems.length} items </Link> )
                </big>  

                <big>
                    <img id="checkout-lock-logo" src="https://cdn.pixabay.com/photo/2014/04/02/17/03/safety-307803_960_720.png" />  
                </big>
            </div>
            <div id="purchase-main-div">
                <div id="purchase-main-left">
                    <div id="purchase-address-container">
                        <h2 id="margin-none">
                            Shipping Address
                        </h2>

                        <p id="margin-none">
                            <big id="capitalize">
                                {this.props.userName}
                            </big>
                            <br />
                            <big>
                                1801 ANGELO DR 
                            </big>
                            <br />
                            <big>
                                BEVERLY HILLS, CA 90210
                            </big>
                        </p>
                    </div>

                    <div id="divider-purchase" />

                    <div id="purchase-address-container">
                        <h2 id="margin-none">
                            Payment Methods
                        </h2>

                        <p id="margin-none">
                            <big id="capitalize">
                                Animezon Credit Card
                            </big>
                            <small>
                                ending in 1234
                            </small>

                            <br />
                            <br />

                            <small id="purchase-free-return">
                                Billing Addess:
                            </small>
                            <small >
                                Same as shipping address.
                            </small>

                            <br />
                            <br />

                            <small id="purchase-item-title">
                                Promotion Code: AnimezonRulez
                            </small>
                        </p>
                    </div>

                    <div id="divider-purchase" />

                    <div id="review-items-to-purchase">
                        <h2>
                            Review Items
                        </h2>
                        {
                            this.props.myItems.map(myItem => < PurchasePreview item={myItem} key={myItem.id}/> )
                        }
                    </div>
                </div>

                <div id="purchases-main-right">
                    <div id="place-your-order">
                        <button onClick={this.purchaseAllItems} id="order-btn-to-buy">
                            Place your order
                        </button>

                        <small id="purchase-agreement-text">
                            By placing your order, you agree to Animezon's privacy notice and conditions of use.
                        </small>

                        <div id="divider" />

                        <h3>
                            Order Summary
                        </h3>

                        <div id="order-summary-info">
                            <div id="order-sum-info">
                                <small>
                                    Items ({this.props.myItems.length}):
                                </small>
                                <small>
                                    ${this.props.totalSum}
                                </small>
                            </div>
                            <div id="order-sum-info">
                                <small>
                                    Shipping & Handling:
                                </small>
                                <small>
                                    $0.00
                                </small>
                            </div>
                            <div id="order-sum-info">
                                <small>
                                    Your Coupon Savings:
                                </small>
                                <small>
                                    -$3.50
                                </small>
                            </div>
                            <div id="place-order-divider" />
                            <div id="order-sum-info">
                                <small>
                                    Total before tax:
                                </small>
                                <small>
                                    ${this.props.totalSum - 3.5}
                                </small>
                            </div>
                            <div id="order-sum-info">
                                <small>
                                    Estimated tax to be collected:
                                </small>
                                <small>
                                    $3.50
                                </small>
                            </div>
                            <div id="divider" />

                            <div id="order-total-red">
                                <h3 id="red-total-text">
                                    Order total:
                                </h3>

                                <h3 id="red-total-text">
                                    ${this.props.totalSum}
                                </h3>
                            </div>
                        </div>

                    </div>

                    <div id="place-your-order-subtext">
                        <small>
                            Qualifying offers:
                            <br />
                            • Your Coupon Savings
                        </small>

                        <small>
                            A moment of silence to your wallet.
                        </small>

                        <small>
                            Animezon Prime shipping benefits have been applied to your order.
                        </small>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default PurchasePage;