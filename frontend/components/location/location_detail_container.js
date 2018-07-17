import { connect } from 'react-redux';
import { fetchLocation, fetchReview } from '../../actions/location_actions';
import LocationDetail from './location_detail';


const mapStateToProps = (state, ownProps) =>  {
  let location = state.entities.locations[ownProps.match.params.locationId];
  let users;
  if (location) {
    users = state.entities.users;
  }
  let reviews = state.entities.reviews;
  let currentUser = state.entities.users[state.session.id];

  return {
    location,
    users,
    reviews,
    currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  fetchLocation: id => dispatch(fetchLocation(id)),
  createReview: formReview => dispatch(createReview(formReview))
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetail);
