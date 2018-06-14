import merge from 'lodash/merge';

import { RECEIVE_REVIEW, DELETE_REVIEW } from '../actions/review_actions';
import { RECEIVE_LOCATION } from '../actions/location_actions';

const reviewReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LOCATION:
      return merge({}, action.payload.reviews);
    case RECEIVE_REVIEW:
      return merge({}, state, {[action.payload.review.id ]: action.payload.review});
    case DELETE_REVIEW:
      let newState = merge({}, state);
      delete newstate[action.id];
      return newState;
    default:
      return state;
  }
}

export default reviewReducer;
