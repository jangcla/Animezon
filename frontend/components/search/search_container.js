import { connect } from 'react-redux';
import { fetchItems } from '../../actions/item_actions';
import Search from './search';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { fetchReviews } from '../../actions/review_actions';

const mSTP = (state, ownProps) => {
    const items = Object.values(state.entities.items);
    const keywords = ownProps.match.params.keyword;
    const keywordList = keywords.toLowerCase();

    let searchedItem = items.filter(item => item.name.toLowerCase().includes(keywordList) || item.type_tag.toLowerCase().includes(keywordList));
    let allReviews = Object.values(state.entities.reviews);
 
    
    // console.log(searchedAnime);
    return {
        items: items,
        keyword: keywords,
        searchedItem: searchedItem,
        hollowStar: faStar,
        allReviews: allReviews,
    }
}

const mDTP = dispatch => {
    return {
        fetchItems: () => dispatch(fetchItems()),
        fetchReviews: () => dispatch(fetchReviews())
    }
}

export default connect(mSTP, mDTP)(Search);