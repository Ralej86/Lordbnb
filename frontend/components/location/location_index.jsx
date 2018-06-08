import React from 'react';
import LocationIndexItem from './location_index_item';

class LocationIndex extends React.Component {
  componentDidMount() {
    this.props.fetchLocations();
  }

  render() {

    return (
      <div className="location-cont">
        COME SEE ME
        <h1 className="location-cont-title">Homes Around Middle Earth</h1>
        <br />
        <ul className="location-cont-index">
          {this.props.locations.map(location => <LocationIndexItem key={location.id} location={location} />)}
        </ul>
      </div>
    )
  }
}

export default LocationIndex;
