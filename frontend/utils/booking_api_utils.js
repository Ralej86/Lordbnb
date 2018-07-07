export const postBooking = booking => (
  $.ajax({
    method: 'POST',
    url: '/api/bookings',
    data: { booking }
  })
)

export const patchBooking = booking => (
  $.ajax({
    method: 'PATCH',
    url: `/api/bookings/${booking.id}`,
    data: { booking }
  })
)

export const deleteBooking = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/bookings/${booking.id}`
  })
)

export const fetchBooking = () => (
  $.ajax({
    method: 'GET',
    url: '/api/bookings'
})
