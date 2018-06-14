import {combineReducers} from 'redux';
import userReducer from './users_reducer';
import locationReducer from './location_reducer';
import reviewReducer from './review_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  locations: locationReducer,
  reviews: reviewReducer
});

export default entitiesReducer;
