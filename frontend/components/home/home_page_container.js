import React from "react";
import { connect } from "react-redux";
import HomePage from "./home_page";

const mSTP = state => {
    return ({
        currentUser: state.entities.users[state.session.id]
    })
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(HomePage);
