import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session_actions";
import SessionForm from './session_form';
import { receiveErrors } from "../../actions/session_actions";

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to='/login' id='li'>Sign-in</Link>
})

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user)),
    receiveErrors: errors => dispatch(receiveErrors(errors))
})

export default connect(mSTP, mDTP)(SessionForm);