json.review do
  json.partial! 'api/reviews/review', review: @review
end

json.user do
  json.extract! @review.author, :id, :name, :image_url
end
