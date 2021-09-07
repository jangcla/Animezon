import { connect } from "react-redux";

import { fetchCarts } from "../../actions/cart_actions";
import { logout } from "../../actions/session_actions";
import Greeting from './greeting';


const mSTP = state => {
    const cartItems = Object.values(state.entities.carts)

    let mine = cartItems.filter(cartItem => cartItem.user_id === state.session.id)

    return {
        currentUser: state.entities.users[state.session.id],
        mine: mine
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchCarts: () => dispatch(fetchCarts()) 
})

export default connect(mSTP, mDTP)(Greeting)