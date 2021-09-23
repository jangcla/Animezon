import {
    RECEIVE_CART,
    RECEIVE_CARTS,
    REMOVE_CART
} from '../actions/cart_actions';

const cartsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CART:
            nextState[action.cart.id] = action.cart
            return nextState;
        case RECEIVE_CARTS:
            return action.carts;
        case REMOVE_CART:
            delete nextState[action.cartId]
            return nextState;
        default:
            return state;
    }
}

export default cartsReducer;