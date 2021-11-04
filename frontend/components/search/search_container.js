import { connect } from 'react-redux';
import { fetchItems } from '../../actions/item_actions';

const mSTP = state => {
    return {

    }
}

const mDTP = dispatch => {
    return {
        fetchItems: () => dispatch(fetchItems())
    }
}

export default connect(mSTP, mDTP)(Search);