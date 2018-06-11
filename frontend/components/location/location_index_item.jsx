import React from 'react';
import { Link } from 'react-router-dom';

const LocationIndexItem = ({ location }) => (
  <ul className="location-cont-index-item">
    <li className="location-cont-index-item-image">IMAGE</li>
    <li className='location-cont-index-item-name'>{location.name}</li>
    <li className='location-cont-index-item-price'>{location.price}</li>
    <li className='location-cont-index-item=rating'>5</li>
  </ul>
)

export default LocationIndexItem;
