import {combineReducers} from 'redux'
import userReducer from './users_reducer'
import locationReducer from './location_reducer'

const entitiesReducer = combineReducers({
  users: userReducer,
  locations: locationReducer
});

export default entitiesReducer;
