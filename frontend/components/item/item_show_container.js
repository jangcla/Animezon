import { connect }  from 'react-redux';

import { fetchItem } from '../../actions/item_actions';
import ItemShow from './item_show' ;

// const mSTP = (state, ownProps) => {
//     console.log(state, ownProps)
//    return {item: state.entities.items[ownProps.match.params.itemId]}
// }
const mSTP = (state, ownProps) => ({
    item: state.entities.items[ownProps.match.params.itemId]
})

const mDTP = dispatch => ({
    fetchItem: itemId => dispatch(fetchItem(itemId))
})

export default connect(mSTP, mDTP)(ItemShow);