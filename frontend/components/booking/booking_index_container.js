import connect from 'react-redux';

const msp = (state, ownProps) => {
  bookings: state.entities.bookings,
  currentUser: state.entities.users[state.session.id]
}

const mdp = dispatch => (
  fetchBookings: currentUser => dispatch(fetchBookings(currentUser)),
  deleteBookings:
)
