import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";
import { receiveErrors } from "../../actions/session_actions";

const mSTP = ({errors}) => ({
    errors: errors.session,
    formType: 'login',
    navLink: <Link to='/signup' id='create-acc'>Create your Animezon account</Link>
})

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    receiveErrors: errors => dispatch(receiveErrors(errors))
})

export default connect(mSTP, mDTP)(LoginForm);