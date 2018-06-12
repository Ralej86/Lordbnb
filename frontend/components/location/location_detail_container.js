import { connect } from 'react-redux';
import { fetchLocation } from '../../actions/location_actions';
import LocationDetail from './location_detail';


const mapStateToProps = (state, ownProps) =>  {
  let location = state.entities.locations[ownProps.match.params.locationId];
  let user;
  if (location) {
    user = state.entities.users[location.user_id];
  }

  return {
    location,
    user
  }
}

// ({
//   location: state.entities.locations[ownProps.match.params.locationId],
//   user: state.entities.users[location]
// })

const mapDispatchToProps = dispatch => ({
  fetchLocation: id => dispatch(fetchLocation(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetail);
