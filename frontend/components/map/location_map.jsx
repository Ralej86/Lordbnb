import React from 'react';
import ReactDOM from 'react-dom';

import MarkerManager from '../../utils/marker_manager';

class LocationMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: {
        lat: 37.7758,
        lng: -122.435
      },
      zoom: 13
    };

    const map = this.refs.map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, Object.values(this.props.locations));
    this.registerListeners();
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.locations);
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { latitude: north, longitude: east},
        southWest: { latitude: south, longitude: west } };
        this.props.updateFilter('bounds', bounds);
      });
  }

  render () {
    return (
      <div className="map-container" ref={ map => this.mapNode = map }>
      </div>
    );
  }
}

export default LocationMap;
