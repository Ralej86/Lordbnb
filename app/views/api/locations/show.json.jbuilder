json.location do
  json.partial! 'api/locations/location', location: @location
end

json.user do
  json.extract! @location.user, :id, :name, :image_url
end
