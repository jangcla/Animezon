import { connect } from 'react-redux'

import ItemAdded from './cart_item_add'

const mSTP = state => {
    const cartItems = Object.values(state.entities.carts) 
    let last = cartItems.filter(cartItem => cartItem.user_id === state.session.id).reverse()[0]

    return {
        last: last
    }

}

const mDTP = dispatch => {
    return {
        deleteCart: (cartId) => dispatch(deleteCart(cartId)),
    }
}

export default connect(mSTP, mDTP)(ItemAdded);