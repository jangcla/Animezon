import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../nav/navbar'

class Cart extends React.Component {

    componentDidMount() {
        this.props.fetchCarts()
    }

    render() {
        return this.props.mine ? 
        (
            <div>
                <Navbar/>
                <div>Hello Testing</div>
                <div>{this.props.mine.length}</div>
            </div>
        )
        :
        null;
    }
}

export default Cart;