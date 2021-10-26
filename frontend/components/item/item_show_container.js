import { connect }  from 'react-redux';
import { createCart } from '../../actions/cart_actions';
import { fetchItem } from '../../actions/item_actions';
import { fetchReviews } from '../../actions/review_actions';
import ItemShow from './item_show' ;
import { faStar } from '@fortawesome/free-regular-svg-icons'

const mSTP = (state, ownProps) => {
    // console.log(state, ownProps)

    const allReviews = Object.values(state.entities.reviews);
    // console.log(allReviews);

    let itemReviews = allReviews.filter(allReview => allReview.item_id === state.entities.item.id).reverse();
    // console.log(itemReviews);

        return {
            currentUser: state.entities.users[state.session.id],
            item: state.entities.items[ownProps.match.params.itemId],
            user: state.session.id,
            itemReviews: itemReviews,
            hollowStar: faStar
        }

}
// const mSTP = (state, ownProps) => ({
//     item: state.entities.items[ownProps.match.params.itemId],
//     currentUser: state.session.id
// })

const mDTP = dispatch => ({
    fetchItem: itemId => dispatch(fetchItem(itemId)),
    createCart: cart => dispatch(createCart(cart)),
    fetchReviews: () => dispatch(fetchReviews())
})

export default connect(mSTP, mDTP)(ItemShow);