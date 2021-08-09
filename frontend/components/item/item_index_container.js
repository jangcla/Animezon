import { connect } from 'react-redux';
import { receiveItems } from '../../actions/item_actions';
import ItemIndex from './item_index'


const mSTP = state => ({
    items: Object.values(state.entities.items)
})

const mDTP = dispatch => ({
    receiveItems: () => dispatch(receiveItems())
})

export default connect(mSTP, mDTP)(ItemIndex);