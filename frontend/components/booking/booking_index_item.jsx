import React from 'react';
import { Link } from 'react-router-dom';

const BookingIndexItem = ({ booking }) => (
  <ul className="booking">
    <Link to={`locations/${booking.location_id}`}>
      
    </Link>
  </ul>
)

export default BookingIndexItem;
