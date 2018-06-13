import React from 'react';

import LocationMap from './location_map';
import LocationIndexContainer from '../location/location_index_container';
// import LocationIndex from  '../location/location_index';

const Search = ({ locations, updateFilter }) => (
  <div className = "map-page">
    <div className="map-index">
      <LocationIndexContainer locations= { locations }/>
    </div>
    <LocationMap
      locations= { locations }
      updateFilter= { updateFilter }
      />
  </div>
);

export default Search;
