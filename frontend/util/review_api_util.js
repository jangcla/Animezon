export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: `/api/reviews`,
        data: { review }
    })
)

export const fetchReview = (reviewId) => (
    $.ajax({
        method: 'GET',
        url: `/api/reviews/${reviewId}`
    })
)

export const fetchReviews = () => (
    $.ajax({
        method: 'GET',
        url: `/api/reviews`
    })
)

export const updateReviews = (review) => (
    $.ajax({
        method: 'PATCH',
        url: `api/reviews/${review.id}`,
        data: { review }
    })
)

export const deleteCart = (reviewId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/reviews/${reviewId}`
    })
)