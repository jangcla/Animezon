import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const PurchasePreview = ({item}) => {
    const history = useHistory();


    return (
        <div id="purchase-item-preview-cont">
            <p>
                Delivery date: The 32nd of the month
            </p>
            <div id="purchase-item-info">
                <img src={item.photoUrl} id="purchase-item-img"/>

                <div id="purchase-inner-info">
                    <p id="purchase-item-title">
                        {item.title}
                    </p>

                    <p>
                        ${item.price}
                    </p>

                    <p>
                        Qty: {item.quantity}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PurchasePreview;