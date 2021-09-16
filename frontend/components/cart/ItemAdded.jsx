import React from 'react'


class ItemAdd extends React.Component {
    render() {
        return (
            <div id='item-add-preview'>
                <div id="item-preview-photo">
                    <big id='green-cart'>✓</big> 
                    <img src={this.props.addItem.photoUrl} id='added-photo'/>
                    <big id='green-cart2'>Added to Cart</big>
                </div>

                <div id="item-preview-text">
                    <h3>Item has been succesfully added to cart</h3>

                    <h4><big>Cart subtotal</big><small>({this.props.mine.length} items)</small></h4>
                </div>

            </div>
        )
    }
}

export default ItemAdd;