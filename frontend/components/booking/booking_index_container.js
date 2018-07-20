import connect from 'react-redux';

const msp = (state, ownProps) => {

}

const mdp = dispatch => (
  fetchBookings: currentUser => dispatch(getBookings(currentUser))
)
