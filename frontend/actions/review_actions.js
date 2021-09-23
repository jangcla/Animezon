import * as reviewUtil from '../util/review_api_util'

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const fetchReview = reviewId => dispatch => (
    reviewUtil.fetchReview(reviewId)
        .then(review => dispatch(receiveReview(review)))
)

export const fetchReviews = () => dispatch => (
    reviewUtil.fetchReviews()
        .then(reviews => dispatch(receiveReviews(reviews)))
)

export const createReview = review => dispatch => (
    reviewUtil.createReview(review)
        .then(madeReview => dispatch(receiveReview(madeReview)))
)

export const updateReview = review => dispatch => (
    reviewUtil.updateReview(review)
        .then(updatedReview => dispatch(receiveReview(updatedReview)))
)

export const deleteReview = reviewId => dispatch => (
    reviewUtil.deleteReview(reviewId)
        .then((review) => dispatch(removeReview(review.id)))
)