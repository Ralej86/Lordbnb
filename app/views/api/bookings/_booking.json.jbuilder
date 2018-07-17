json.booking do
  json.extract! booking, :id, :guests, :start_date, :end_date, :guest_id, :location_id
end

json.location do
  json.id booking.location.id
  json.name booking.location.name
  json.image_url booking.location.image_url
end
