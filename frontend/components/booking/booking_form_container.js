import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createBooking } from '../../actions/booking_actions';
import { withRouter } from 'react-router';

const msp = (state, ownProps) => {
  let currentLocation = state.entities.locations[ownProps.match.params.locationId]
  let currentUser = state.entities.users[state.session.id]

  return ({
    currentLocation,
    currentUser
  })
}

const mdp = dispatch => ({
  createBooking: formBooking => dispatch(createBooking(formBooking)),
  clearErrors: () => dispatch(receiveErrors([]))
})

export default withRouter(connect(msp, mdp)(BookingForm));
