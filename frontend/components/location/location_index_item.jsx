import React from 'react';
import { Link } from 'react-router-dom';

const LocationIndexItem = ({ location }) => (
  <ul className="location-cont-index-item">
    <Link to={`locations/${location.id}`}>
      <div className="location-cont-index-item-image">
        <img src={`${location.image_url}`} height="150" width="500"/>
      </div>
    </Link>
      <li className='location-cont-index-item-detail'>{location.home_type} &sdot; {location.region}</li>
      <li className='location-cont-index-item-name'>{location.name}</li>
      <li className='location-cont-index-item-price'>${location.price} per night &sdot; Free Cancellation</li>
      <li className='location-cont-index-item=rating'>Rating: 5</li>
  </ul>
)

export default LocationIndexItem;
