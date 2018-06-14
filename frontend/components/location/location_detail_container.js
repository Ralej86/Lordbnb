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

  return {
    location,
    users,
    reviews
  }
}

const mapDispatchToProps = dispatch => ({
  fetchLocation: id => dispatch(fetchLocation(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetail);
