import React from "react";
import { connect } from "react-redux";
import { fetchCarts } from "../../actions/cart_actions";
import HomePage from "./home_page";

const mSTP = state => {
    return ({
        currentUser: state.entities.users[state.session.id],
        sessionId: state.session.id,
    })
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchCarts: () => dispatch(fetchCarts()),
})

export default connect(mSTP, mDTP)(HomePage);
