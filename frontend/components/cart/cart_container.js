import { connect } from 'react-redux'
import { deleteCart, updateCart } from '../../actions/cart_actions'
import { fetchCarts } from '../../actions/cart_actions'
import { fetchItems } from '../../actions/item_actions'

import Cart from './cart'

const mSTP = state => {
    const allItems = Object.values(state.entities.items)
    const cartItems = Object.values(state.entities.carts) 
    let mine = cartItems.filter(cartItem => cartItem.user_id === state.session.id).reverse()

    let alsoItems = []
        if (allItems.length !== 0) {
            while (alsoItems.length < 4) {
                let num = Math.floor(Math.random() * allItems.length)
                let random = allItems[num]
                if (!alsoItems.includes(random)) {
                    alsoItems.push(random)
                }
            }
        }

    let sumTotal = 0
        if (mine.length !== 0) {
            mine.forEach(item => {
                sumTotal += (item.price * item.quantity)
            })
        }

    let itemTotal = 0
        if (mine.length !== 0) {
            mine.forEach(item => {
                itemTotal += (item.quantity)
            })
        }

    return {
        currentUser: state.entities.users[state.session.id],
        mine: mine,
        alsoItems: alsoItems,
        sumTotal: sumTotal,
        itemTotal: itemTotal
    }
}

const mDTP = dispatch => {
    return {
        fetchCarts: () => dispatch(fetchCarts()),
        fetchItems: () => dispatch(fetchItems()),
        deleteCart: (cartId) => dispatch(deleteCart(cartId)),
        updateCart: (cart) => dispatch(updateCart(cart)),
    }
}

export default connect(mSTP, mDTP)(Cart);