import { connect } from "react-redux";
import { createReview, deleteReview } from "../../actions/review_actions";

import Reviews from './reviews_index';

const mSTP = (state, ownProps) => {
    const allReviews = Object.values(state.entities.reviews)

    let itemReviews = allReviews.filter(review => review.item_id === ownProps.match.params )
}

