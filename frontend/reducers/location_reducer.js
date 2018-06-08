import { RECEIVE_ALL_LOCATIONS,
  RECEIVE_LOCATION } from '../actions/location_actions';
  import merge from 'lodash/merge'

const locationReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_LOCATIONS:
      return action.locations
    case RECEIVE_LOCATION:
    return merge({}, state, {[action.location.id]: action.location})
    default:
      return state;
  }
}

export default locationReducer;
