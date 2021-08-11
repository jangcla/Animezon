import { connect } from 'react-redux';
import { fetchItems } from '../../actions/item_actions';

import ItemIndex from './item_index'


const mSTP = state => {
    return{items: Object.values(state.entities.items)}
}
// const mSTP = state => ({
//     items: Object.values(state.entities.items)
// })

const mDTP = dispatch => {

    return {fetchItems: () => dispatch(fetchItems())}
}
// const mDTP = dispatch => ({
//     fetchItems: () => dispatch(fetchItems())
// })

export default connect(mSTP, mDTP)(ItemIndex);