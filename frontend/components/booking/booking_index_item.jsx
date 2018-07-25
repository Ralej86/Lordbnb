import React from 'react';
import { Link } from 'react-router-dom';

const BookingIndexItem = ({ booking }) => (
  <ul className="booking">
    <Link to={`/locations/${booking.booking.location_id}`}>
      <div className='booking-image'>
        <img src={`${booking.location.image_url}`}/>
      </div>
    </Link>
    <li className="booking-location-title">{booking.location.name}</li>
    <li className="booking-location-date">Check-in: {booking.booking.start_date}</li>
    <li className="booking-location-date">Check-out: {booking.booking.end_date}</li>
    <button onClick={() => this.props.deleteBooking(booking.booking.id)}>Delete Booking</button>
    <li className="booking-delete-button">delete button goes here</li>
  </ul>
)

export default BookingIndexItem;
