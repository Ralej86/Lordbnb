import React from 'react';
import { Link } from 'react-router-dom';

const LocationIndexItem = ({ location }) => (
  <ul className="location-cont-index-item">
    <li className="location-cont-index-item-image">IMAGE</li>
    <li>{location.name}</li>
    <li>{location.cost}</li>
    <li>{location.rating}</li>
  </ul>
)

export default LocationIndexItem;
