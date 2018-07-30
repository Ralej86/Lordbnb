import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createBooking, receiveErrors, clearBookings } from '../../actions/booking_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  let currentLocation = state.entities.locations[ownProps.match.params.locationId]
  let currentUser = state.entities.users[state.session.id]
  let errors = state.errors.booking

  return ({
    currentLocation,
    currentUser,
    errors
  })
}

const mdp = dispatch => ({
  createBooking: formBooking => dispatch(createBooking(formBooking)),
  clearErrors: () => dispatch(receiveErrors([])),
  clearBookings: () => dispatch(clearBookings())
})

export default withRouter(connect(msp, mdp)(withRouter(BookingForm)));
