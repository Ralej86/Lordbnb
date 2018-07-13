import merge from 'lodash/merge';

import { RECEIVE_BOOKING_ERRORS,
  RECEIVE_BOOKING } from '../actions/booking_actions';
import { RECEIVE_LOCATION } from '../actions/location_actions';

  const bookingErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_BOOKING_ERRORS:
        return action.errors;
      case RECEIVE_BOOKING:
        return [];
      // case RECEIVE_LOCATION:
      //   return action.errors
      default:
        return state;
    }
  }

  export default bookingErrorsReducer
