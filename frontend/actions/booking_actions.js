import * as BookingApiUtils from '../utils/booking_api_utils';

export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const DELETE_BOOKING = 'DELETE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';

const receiveBookings = payload => ({
  type: RECEIVE_ALL_BOOKINGS,
  payload
})

const receiveBooking = payload => ({
  type: RECEIVE_BOOKING,
  payload
})

const deleteBooking = booking => ({
  type: DELETE_BOOKING,
  booking
})

const receiveErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
})

export const receiveBookings = currentUser => dispatch => (
  BookingApiUtils.getBookings(currentUser).then(
    payload => dispatch(receiveBookings(payload))
  )
)

export const createBooking = bookingForm => dispatch => (
  BookingApiUtils.postBooking(bookingForm).then(
    payload => dispatch(receiveBooking(payload))
  ), err => (
    dispatch(receiveErrors(err.responseJson))
  )
)

export const destroyBooking = id => dispatch => (
  BookingApiUtils.deleteBooking(id).then(
    payload => dispatch(deleteBooking(payload))
  )
)
