import { connect }  from 'react-redux';
import { createCart } from '../../actions/cart_actions';

import { fetchItem } from '../../actions/item_actions';
import ItemShow from './item_show' ;

const mSTP = (state, ownProps) => {
    // console.log(state, ownProps)

    if (state.entities.users[state.session.id]) {
        const userName = state.entities.users[state.session.id].email.split("@");
        let name = userName[0]
        return {
            item: state.entities.items[ownProps.match.params.itemId],
            currentUser: state.entities.users[state.session.id],
            name: name,
            user: state.session.id
        }
    } else {
        return {
            item: state.entities.items[ownProps.match.params.itemId]
        }
    }
}
// const mSTP = (state, ownProps) => ({
//     item: state.entities.items[ownProps.match.params.itemId],
//     currentUser: state.session.id
// })

const mDTP = dispatch => ({
    fetchItem: itemId => dispatch(fetchItem(itemId)),
    createCart: cart => dispatch(createCart(cart))
})

export default connect(mSTP, mDTP)(ItemShow);