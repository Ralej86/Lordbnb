import { connect } from 'react-redux';

import ReviewIndex from './review_index';

const msp = (state, locationId) => {
  const currentLocation = state.entities.locations[locationId];
  const reviews = Object.values(state.entities.reviews);
  const currentUser = state.entities.users[state.session.id];

  return ({
    currentLocation,
    reviews,
    currentUser
  })
}

const mdp = dispatch => ({
  updateReview: formReview => dispatch(updateReview(formReview)),
  deleteReview: reviewId => dispatch(destroyReview(reviewId))
})

export default connect(msp, mdp)(ReviewIndex);
