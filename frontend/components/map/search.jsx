import React from 'react';

import LocationMap from './location_map';
import LocationIndexContainer from '../location/location_index_container';

const Search = ({ locations, updateFilter }) => (
  <div>

    <LocationIndexContainer locations= { locations }/>
    <LocationMap
      locations= { locations }
      updateFilter= { updateFilter }
      />
  </div>
);

export default Search;
