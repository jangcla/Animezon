import { connect } from "react-redux";
import { createReview, deleteReview } from "../../actions/review_actions";

import ReviewForm from './review_form';

const mSTP = state => {
    const item = Object.values(state.entities.items)
}

