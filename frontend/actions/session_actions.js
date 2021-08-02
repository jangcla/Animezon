import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const login = user => dispatch => (
    APIUtil.login(user)
        .then(
            currentUser => dispatch(receiveCurrentUser(currentUser)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
)

export const logout = () => dispatch => (
    APIUtil.logout()
        .then(
            user = dispatch(logoutCurrentUser()))
)

export const signup = user => dispatch => (
    APIUtil.signup(user)
        .then(
            newUser => dispatch(receiveCurrentUser(newUser)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
)