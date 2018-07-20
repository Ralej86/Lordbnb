import { connect } from 'react-redux';
import BookingIndex from './booking_index';
import { fetchBookings, deleteBooking } from '../../actions/booking_actions';

const msp = state => {
  bookings: state.entities.bookings,
  currentUser: state.entities.users[state.session.id]
}

const mdp = dispatch => (
  fetchBookings: currentUser => dispatch(fetchBookings(currentUser)),
  deleteBooking: booking => dispatch(deleteBooking(booking))
)

export default connect(msp, mdp)(BookingIndex);
