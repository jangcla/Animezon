import { connect } from 'react-redux'
import { deleteCart, updateCart } from '../../actions/cart_actions'

import Cart from './cart'

const mSTP = state => {
    const cartItems = Object.values(state.entities.cart)


}

const mDTP = dispatch => {

}

export default connect(mSTP, mDTP)(Cart);