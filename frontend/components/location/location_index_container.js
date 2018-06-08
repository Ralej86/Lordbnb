import { connect } from 'react-redux';
import locationIndex from './location_index';
import { fetchLocations } from '../../actions/location_actions'

const mapStateToProps = state => ({
  locations: state.locations
});

const mapDispatchToProps = dispatch => ({
  fetchLocations: () => dispatch(fetchLocations())
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationIndex);
