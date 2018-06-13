import React from 'react';
import ReactDOM from 'react-dom';

import MarkerManager from '../../utils/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.latitude(),
  lng: latLng.longitude()
});

const mapOptions = {
  center: {
    lat: 37.7758,
    lng: -122.435
  },
  zoom: 13
};

class LocationMap extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.locations);
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

  handleMarkerClick(location) {
    this.props.history.push(`locations/${location.id}`)
  }

  render () {
    return (
      <div className="map-container" ref={ map => this.mapNode = map }>
      </div>
    );
  }
}

export default LocationMap;
