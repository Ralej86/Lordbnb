import React from 'react';
import LocationIndexItem from './location_index_item';

class LocationIndex extends React.Component {
  componentDidMount() {
    this.props.fetchLocations();
  }

  render() {

    return (
      <div className="location-cont">
        <div className="location-cont-title">
          <h2>Homes Around Middle Earth</h2>
          <h1>Explore some of the most exclusive houses available in Middle Earth</h1>
        </div>
        <br />
        <div className="location-cont-index">
          {this.props.locations.map( location =>
            <LocationIndexItem key={location.id} location={location} />)}
        </div>
      </div>
    )
  }
}

export default LocationIndex;
