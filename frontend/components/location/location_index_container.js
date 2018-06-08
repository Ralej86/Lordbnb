import { connect } from 'react-redux';
import LocationIndex from './location_index';
import { fetchLocations } from '../../actions/location_actions'

const mapStateToProps = state => ({
  locations: Object.values(state.entities.locations)
});

const mapDispatchToProps = dispatch => ({
  fetchLocations: () => dispatch(fetchLocations())
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationIndex);
