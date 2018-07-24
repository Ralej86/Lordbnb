import React from 'react';
import { Link } from 'react-router-dom';

const BookingIndexItem = ({ booking }) => (
  <ul className="booking">
    <Link to={`/locations/${booking.booking.location_id}`}>
      <div className='booking-image'>
        <p>Image goes here</p>
      </div>
    </Link>
    <li className="booking-location-title"></li>
    <li></li>
    <li></li>
  </ul>
)

export default BookingIndexItem;
