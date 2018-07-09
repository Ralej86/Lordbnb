import { RECEIVE_BOOKING_ERRORS,
  RECEIVE_BOOKING } from '../actions/booking_actions';

  const bookingErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_BOOKING_ERRORS:
        return action.errors;
      case RECEIVE_BOOKING:
        return [];
      default:
        return state;
    }
  }

  export default bookingErrorsReducer
