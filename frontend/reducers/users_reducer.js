import merge from 'lodash/merge'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'


//does action.currentUser need to be changed to user?

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    return merge({}, state, {[action.currentUser.id]: action.currentUser})
    default:
      return state;
  }
}

export default userReducer;
