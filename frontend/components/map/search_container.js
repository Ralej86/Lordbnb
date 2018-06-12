import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = state => ({
  locations: Object.keys(state.entities.locations).map( key => state.entities.locations[key])
})

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
