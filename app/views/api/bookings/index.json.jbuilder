json.bookings do
  @bookings.each do
    json.set! booking.id do
      json.partial! 'api/bookings/booking', booking: booking
    end
  end
end
