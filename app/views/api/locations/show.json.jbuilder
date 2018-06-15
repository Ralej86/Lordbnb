json.location do
  json.partial! 'api/locations/location', location: @location
end

json.users do
  json.set! @location.user_id do
    json.extract! @location.user, :id, :name, :image_url
  end
  @location.reviews.each do |review|
    json.set! review.author.id do
      json.extract! review.author, :id, :name, :image_url
    end
  end
end


# @location.reviews.each do |review|

json.reviews do
  @location.reviews.includes(:author).each do |review|
    json.set! review.id do
      json.extract! review, :id, :title, :body, :rating, :author_id
      json.created_at review.created_at.strftime("%d-%m-%Y")
    end
  end
end
