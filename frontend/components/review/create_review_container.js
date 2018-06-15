import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CreateReview from './create_review';
import { createReview } from '../../actions/review_actions';

const msp = (state, ownProps) => {
  let currentLocation = state.entities.locations[ownProps.match.params.locationId];
  let currentUser = state.entities.users[state.session.id];

  return ({
    currentLocation,
    currentUser
  })
}

const mdp = dispatch => ({
  createReview: formReview => dispatch(createReview(formReview))
})



export default withRouter(connect(msp, mdp)(CreateReview));
