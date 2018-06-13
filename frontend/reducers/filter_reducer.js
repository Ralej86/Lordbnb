import { UPDATE_FILTER } from '../actions/filter_actions'
import merge from 'lodash/merge';

const defaultFilters = Object.freeze({
  bounds: {}
});

const filterReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_FILTER:
      const newFilter = {[action.filter]: action.value};
      return merge({}, state, newFilter);
    default:
      return state;
  }
}

export default filterReducer;
