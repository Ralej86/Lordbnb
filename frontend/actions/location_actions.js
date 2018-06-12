import * as LocationApiUtil from '../utils/location_api_util';

export const RECEIVE_ALL_LOCATIONS = 'RECEIVE_ALL_LOCATIONS';
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';

const receiveAllLocations = locations => ({
  type: RECEIVE_ALL_LOCATIONS,
  locations
})

const receiveLocation = payload => ({
  type: RECEIVE_LOCATION,
  payload
})

export const fetchLocations = filters => dispatch => (
  LocationApiUtil.getLocations(filters).then(
    locations => dispatch(receiveAllLocations(locations)))
);

export const fetchLocation = id => dispatch => (
  LocationApiUtil.getLocation(id).then(
    payload => dispatch(receiveLocation(payload)))
);

export const createLocation = formLocation => dispatch => (
  LocationApiUtil.postLocation(formLocation).then(
    location => dispatch(receiveLocation(location)))
);
