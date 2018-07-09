export const getBookings = currentUser => (
  $.ajax({
    method: 'GET',
    url: `/api/bookings/${currentUser.id}`
  })
);

  export const getBooking = id => (
    $.ajax({
      method: 'GET',
      url: `/api/bookings/${id}`
    })
  );

export const postBooking = booking => (
  $.ajax({
    method: 'POST',
    url: '/api/locations//bookings',
    data: { booking }
  })
);

// export const patchBooking = booking => (
//   $.ajax({
//     method: 'PATCH',
//     url: `/api/bookings/${booking.id}`,
//     data: { booking }
//   })
// )

export const deleteBooking = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/bookings/${id}`
  })
);
