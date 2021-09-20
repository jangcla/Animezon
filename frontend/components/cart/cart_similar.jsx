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
                    <p id="also-title-name">
                        {this.props.alsoItem.name}
                    </p>

                    <p id="also-type">
                        {this.props.alsoItem.type}
                    </p>

                    <p>
                        ${this.props.alsoItem.price}
                    </p>
                </div>
            </div>
        )
    }
}

export default CartSimilar;