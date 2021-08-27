import * as cartUtil from '../util/cart_api_util'

export const RECEIVE_CART = 'RECEIVE_CART';
export const REMOVE_CART = 'REMOVE_CART';
export const RECEIVE_CARTS = 'RECEIVE_CARTS';

export const receiveCarts = carts => ({
    type: RECEIVE_CARTS,
    carts
})

export const receiveCart = cart => ({
    type: RECEIVE_CART,
    cart
})

export const removeCart = cartId => ({
    type: REMOVE_CART,
    cartId
})

export const fetchCarts = () => dispatch => (
    itemUtil.fetchCarts()
        .then(carts => dispatch(receiveCarts(carts)))
)

export const createCart = cart => dispatch => (
    cartUtil.createCart(cart)
        .then(madeCart => dispatch(receiveCart(madeCart)))
)

export const updateCart = cart => dispatch => (
    cartUtil.updateCart(cart)
        .then(updatedCart => dispatch(receiveCart(updatedCart)))
)

export const deleteCart = cartId => dispatch => (
    cartUtil.deleteCart(cartId)
        .then(cart => dispatch(removeCart(cart.id)))
)