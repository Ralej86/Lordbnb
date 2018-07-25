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
    <li className="booking-location-date">{booking.booking.start_date}</li>
    <li className="booking-location-date">{booking.booking.end_date}</li>
  </ul>
)

export default BookingIndexItem;
