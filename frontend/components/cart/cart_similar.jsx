import React from 'react'
import { Link } from 'react-router-dom'

class CartSimilar extends React.Component {
    render() {
        return (
            <div id='also-item'>
                <div id="also-item-photo">
                    <Link to={`/items/${this.props.alsoItem.id}`}>
                        <img src={this.props.alsoItem.photoUrl} id='also-photo'/>
                    </Link>
                </div>

                <div id="also-item-info">
                    <Link to={`/items/${this.props.alsoItem.id}`} id='also-title-link'>
                        {this.props.alsoItem.name}
                    </Link>

                    <p id="also-type">
                        Type: <small id="also-type-blue">{this.props.alsoItem.type_tag}</small> 
                    </p>

                    <p id='also-red-price'>
                        ${this.props.alsoItem.price}
                    </p>
                </div>
            </div>
        )
    }
}

export default CartSimilar;