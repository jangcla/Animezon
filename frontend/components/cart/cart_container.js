import { connect } from 'react-redux'
import { deleteCart, updateCart } from '../../actions/cart_actions'
import { fetchCarts } from '../../actions/cart_actions'

import Cart from './cart'

const mSTP = state => {
    const cartItems = Object.values(state.entities.carts)

    let mine = cartItems.filter(cartItem => cartItem.user_id === state.session.id)

    return {
        mine: mine
    }
}

const mDTP = dispatch => {
    return {
        fetchCarts: () => dispatch(fetchCarts()),
        deleteCart: (cartId) => dispatch(deleteCart(cartId)),
        
    }
}

export default connect(mSTP, mDTP)(Cart);