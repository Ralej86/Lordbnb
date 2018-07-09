import merge from 'lodash/merge';

import { RECEIVE_BOOKINGS,
  RECEIVE_BOOKING,
  DELETE_BOOKING }; from '../actions/booking_actions';

const bookingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKINGS:
      return action.payload.bookings;
    case RECEIVE_BOOKING:
      return merge({}, state, {[action.payload.booking.id]: action.payload.booking})
    case DELETE_BOOKING:
      let newState = merge({}, state);
      delete newState[action.payload.review.id];
      return newState;
    default:
      return state;
  }
}

export default bookingReducer;
