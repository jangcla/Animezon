import React from 'react'
import { Link } from 'react-router-dom'

class Cart extends React.Component {

    componentDidMount() {
        this.props.fetchCarts()
    }

    render() {
        return this.props.mine ? 
        (
            <div>
                <div>Hello Testing</div>
                <div>{this.props.mine.length}</div>
            </div>
        )
        :
        null;
    }
}

export default Cart;