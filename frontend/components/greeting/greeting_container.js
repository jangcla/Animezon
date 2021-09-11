import { connect } from "react-redux";

import { fetchCarts } from "../../actions/cart_actions";
import { logout } from "../../actions/session_actions";
import Greeting from './greeting';


const mSTP = state => {
    const cartItems = Object.values(state.entities.carts)
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

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchCarts: () => dispatch(fetchCarts()) 
})

export default connect(mSTP, mDTP)(Greeting)