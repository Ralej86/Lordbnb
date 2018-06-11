import { connect } from 'react-redux';
import { fetchLocation } from '../../actions/location_actions';
import LocationDetail from './location_detail';


const mapStateToProps = (state, ownProps) => ({
  location: state.entities.locations[ownProps.match.params.locationId]
})

const mapDispatchToProps = dispatch => ({
  fetchLocation: id => dispatch(fetchLocation(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetail);
