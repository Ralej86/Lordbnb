import { connect } from 'react-redux';
import Search from './search';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  locations: Object.values(state.entities.locations),
  minSeating: state.ui.filters.minSeating,
  maxSeating: state.ui.filters.maxSeating
  // locations: Object.keys(state.entities.locations).map( key => state.entities.locations[key])
})

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
