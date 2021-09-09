import { connect } from 'react-redux'
import { deleteCart, updateCart } from '../../actions/cart_actions'
import { fetchCarts } from '../../actions/cart_actions'

import Cart from './cart'

const mSTP = state => {
    const cartItems = Object.values(state.entities.carts)  //this creates a new array of them i need to delete the actual objects in the database
    let mine = cartItems.filter(cartItem => cartItem.user_id === state.session.id)

    if (state.entities.users[state.session.id]) {
        const userName = state.entities.users[state.session.id].email.split("@");
        let name = userName[0]
        return {
            currentUser: state.entities.users[state.session.id],
            mine: mine,
            name: name
        }
    } else {
        return {
            currentUser: state.entities.users[state.session.id],
        }
    }

}

const mDTP = dispatch => {
    return {
        fetchCarts: () => dispatch(fetchCarts()),
        deleteCart: (cartId) => dispatch(deleteCart(cartId)),
        
    }
}

export default connect(mSTP, mDTP)(Cart);