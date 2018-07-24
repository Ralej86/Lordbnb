import React from 'react';
import { Link } from 'react-router-dom';

const BookingIndexItem = ({ booking }) => (
  <ul className="booking">
    <Link to={`locations/${booking.location_id}`}>
      <div className='booking-image'>
        <p>Image goes here</p>
      </div>
    </Link>
    <li></li>
  </ul>
)

export default BookingIndexItem;
