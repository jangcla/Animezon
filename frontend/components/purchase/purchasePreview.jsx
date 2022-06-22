import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const PurchasePreview = ({item}) => {
    const history = useHistory();


    return (
        <div id="purchase-item-preview-cont">
            <p id="green-prev-title">
                Delivery date: The 32nd of the month
                <br />
                <small id='dark-gray-prev-title'>
                    Item shipped from Animezon.com
                </small>
            </p>

            <div id="purchase-item-info">
                <Link to={`/items/${item.item_id}`} >
                    <img src={item.photoUrl} id="purchase-item-img"/>
                </Link>

                <div id="purch-info-cont">
                    <div id="purchase-inner-info">
                        <p id="purchase-item-title">
                            {item.title}
                        </p>

                        <p id="purchase-item-price">
                            ${item.price}
                        </p>

                        <p id="purchase-free-return">
                            FREE Returns
                        </p>

                        <p id="quantity-purchse-item">
                            Qty: {item.quantity}
                        </p>
                    </div>

                    <div id="purchase-delivery-info">
                        <p id='purchase-delivery-p'>
                            <big id="big-purch-delivery">
                                Animezon Prime Delivery Guarantee
                            </big>
                            <br />
                            <small id='small-purch-delivery'> 
                                Comming by 32nd of month
                            </small>
                        </p>

                        <img src="https://github.com/jangcla/Animezon/blob/main/photos/prime-box.jpg?raw=true" id="prev-purch-img"/>
                        
                        <small id="fewer-packages">
                            Get your packages in fewer boxes with the use of Animezon prime delivery. 
                        </small>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PurchasePreview;