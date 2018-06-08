export const getLocations = () => (
  $.ajax({
    method: 'GET',
    url: '/api/locations'
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
