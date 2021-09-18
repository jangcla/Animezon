import { connect } from 'react-redux'
import { fetchCarts } from '../../actions/cart_actions'

import ItemAdded from './cart_item_add'

const mSTP = state => {
    const cartItems = Object.values(state.entities.carts) 
    let mine = cartItems.filter(cartItem => cartItem.user_id === state.session.id).reverse()
 
    let last = []
        if (mine.length !== 0) {
            while (last.length < 1) {
                last.push(mine[0])
            }
        }
    
    return {
        last: last,
        mine: mine
    }

}

const mDTP = dispatch => {
    return {
        fetchCarts: () => dispatch(fetchCarts()),
        fetchCart: (cartId) => dispatch(fetchCart(cartId))
    }
}

export default connect(mSTP, mDTP)(ItemAdded);