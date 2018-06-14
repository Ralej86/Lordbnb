export const postReview = review => (
  $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: { review }
  })
)

export const patchReview = review => (
  $.ajax({
    method: 'PATCH',
    url: `/api/review/${review.id}`,
    data: { review }
  })
)


export const deleteReview = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/review/${id}`,
  })
)
