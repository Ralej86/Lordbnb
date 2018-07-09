import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createBooking } from '../../actions/booking_actions';

const msp = (state, ownProps) => {
  let currentLocation = state.entities.locations[ownProps.match.params.locationId]
  let currentUser = state.entities.users[state.session.id]

  return ({
    currentLocation,
    currentUser
  })
}

const mdp = dispatch => ({
  createBooking: formBooking => dispatch(createBooking(formBooking))
})

export default(connect(msp, mdp)(BookingForm));
