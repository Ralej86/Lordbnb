import React from 'react';
import { Link } from 'react-router-dom';

const LocationIndexItem = ({ location }) => (
  <ul className="location-cont-index-item">
    <Link to={`locations/${location.id}`}>
      <div className="location-cont-index-item-image">
        <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e471a27144269e4b573dfdee025e7327&auto=format&fit=crop&w=500&q=60" height="150" width="500"/>
      </div>
      <li className='location-cont-index-item-detail'>{location.home_type} &sdot; {location.region}</li>
      <li className='location-cont-index-item-name'>{location.name}</li>
      <li className='location-cont-index-item-price'>${location.price} per night &sdot; Free Cancellation</li>
      <li className='location-cont-index-item=rating'>5</li>
    </Link>
  </ul>
)

export default LocationIndexItem;
