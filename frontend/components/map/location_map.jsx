import React from 'react';

import MarkerManager from '../../utils/marker_manager';

class LocationMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.locations);
  }

  render () {
    return (
      <div className="map-container" ref={ map => this.mapNode = map }>
      </div>
    );
  }
}

export default LocationMap;
