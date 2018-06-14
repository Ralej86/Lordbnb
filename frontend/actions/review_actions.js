import * as ReviewApiUtils from '../utils/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';

export const receiveReview = payload => ({
  type: RECEIVE_REVIEW,
  payload
})

const deleteReview = reviewId => ({
  type: DELETE_REVIEW,
  reviewId
})

export const createReview = formReview => dispatch => (
  ReviewApiUtils.postReview(formReview).then(
    payload => dispatch(receiveReview(payload)))
)

export const updateReview = formReview => dispatch => (
  ReviewApiUtils.patchReview(formReview).then(
    payload => dispatch(receiveReview(payload)))
)

export const destroyReview = id => dispatch => (
  ReviewApiUtils.deleteReview(id).then(
    review => dispatch(deleteReview(reviewId)))
)
