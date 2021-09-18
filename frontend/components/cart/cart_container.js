import { connect } from 'react-redux'
import { deleteCart, updateCart } from '../../actions/cart_actions'
import { fetchCarts } from '../../actions/cart_actions'

import Cart from './cart'

const mSTP = state => {
    const cartItems = Object.values(state.entities.carts)  //this creates a new array of them i need to delete the actual objects in the database
    let mine = cartItems.filter(cartItem => cartItem.user_id === state.session.id).reverse()

    let also = []
        if (cartItems.length !== 0) {
            while (also.legnth < 4) {
                let num = Math.floor(Math.random() * anime.length)
                let random = also[num]
                if (!also.includes(random)) {
                    also.push(random)
                }
            }
        }

    let sumTotal = 0
        if (mine.length !== 0) {
            mine.forEach(item => {
                sumTotal += (item.price * item.quantity)
            })
        }
    console.log(sumTotal)

    return {
        currentUser: state.entities.users[state.session.id],
        mine: mine,
        also: also,
        sumTotal: sumTotal
    }
}

const mDTP = dispatch => {
    return {
        fetchCarts: () => dispatch(fetchCarts()),
        deleteCart: (cartId) => dispatch(deleteCart(cartId)),
        
    }
}

export default connect(mSTP, mDTP)(Cart);