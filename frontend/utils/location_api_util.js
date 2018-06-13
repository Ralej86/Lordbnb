export const getLocations = data => (
  $.ajax({
    method: 'GET',
    url: '/api/locations',
    data
  })
)

export const getLocation = id => (
  $.ajax({
    method: 'GET',
    url: `/api/locations/${id}`
  })
)

export const postLocation = location => (
  $.ajax({
    method: 'POST',
    url: `/api/locations`,
    data: { location }
  })
)
