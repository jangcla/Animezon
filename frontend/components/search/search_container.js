import { connect } from 'react-redux';
import { fetchItems } from '../../actions/item_actions';
import Search from './search';

const mSTP = (state, ownProps) => {
    const items = Object.values(state.entities.items)
    return {
        items: items
    }
}

const mDTP = dispatch => {
    return {
        fetchItems: () => dispatch(fetchItems()),

    }
}

export default connect(mSTP, mDTP)(Search);