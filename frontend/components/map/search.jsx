import React from 'react';

import LocationMap from './location_map';

const Search = state => (
  <div>

    LocationIndex
    <LocationMap locations={state.entities.locations} />
  </div>
);


class Search extends React.Component {
  render() {
    return (
    <div>
      contains BenchMap, bench index
    </div>
  )}
}

export default Search;
