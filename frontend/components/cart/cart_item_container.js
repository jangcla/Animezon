import { connect } from 'react-redux'
import { deleteCart, updateCart } from '../../actions/cart_actions'
import CartItem from './cart_item'

const mSTP = state => {

}

const mDTP = dispatch => {
    return {
        deleteCart: (cartId) => dispatch(deleteCart(cartId)),
    }
}

export default connect(mSTP, mDTP)(CartItem);