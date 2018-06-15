import { connect } from 'react-redux';

import ReviewIndex from './review_index';
import { updateReview, destroyReview } from '../../actions/review_actions';

const msp = (state, locationId) => {
  const currentLocation = state.entities.locations[locationId];
  const reviews = Object.values(state.entities.reviews);
  const users = state.entities.users;

  return ({
    currentLocation,
    reviews,
    users
  })
}

const mdp = dispatch => ({
  updateReview: formReview => dispatch(updateReview(formReview)),
  deleteReview: reviewId => dispatch(destroyReview(reviewId))
})

export default connect(msp, mdp)(ReviewIndex);
