import merge from 'lodash/merge'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import{ RECEIVE_LOCATION } from '../actions/location_actions';


//does action.currentUser need to be changed to user?

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.currentUser.id]: action.currentUser});
    case RECEIVE_LOCATION:
      // return action.payload.user;
      return merge({}, state, {[action.payload.user.id]:action.payload.user});
    default:
      return state;
  }
}

export default userReducer;
