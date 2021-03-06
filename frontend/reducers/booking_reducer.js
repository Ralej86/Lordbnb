import merge from 'lodash/merge';

import { RECEIVE_ALL_BOOKINGS,
  RECEIVE_BOOKING,
  DELETE_BOOKING,
  CLEAR_BOOKINGS } from '../actions/booking_actions';
import { RECEIVE_LOCATION } from '../actions/location_actions';

const bookingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return merge({}, state, action.payload.bookings)
      // return action.payload.bookings;
    case RECEIVE_LOCATION:
      return merge({}, state, action.payload.bookings)
    case RECEIVE_BOOKING:
      return merge({}, state, {[action.payload.booking.id]: action.payload})
    case DELETE_BOOKING:
      let newState = merge({}, state);
      delete newState[action.booking.booking.id];
      return newState;
    case CLEAR_BOOKINGS:
      let clearState = {};
      return clearState
    default:
      return state;
  }
}

export default bookingReducer;
