import { connect } from 'react-redux';
import { fetchItems } from '../../actions/item_actions';
import Search from './search';

const mSTP = (state, ownProps) => {
    const items = Object.values(state.entities.items);
    const keywords = ownProps.match.params.keyword;

    const keywordList = keywords.toLowerCase();

    let searchedAnime = items.filter(item => item.name.toLowerCase().includes(keywordList));
    
    
    // console.log(searchedAnime);
    return {
        items: items,
        keyword: keywords,
        searchedAnime: searchedAnime,
    }
}

const mDTP = dispatch => {
    return {
        fetchItems: () => dispatch(fetchItems()),

    }
}

export default connect(mSTP, mDTP)(Search);