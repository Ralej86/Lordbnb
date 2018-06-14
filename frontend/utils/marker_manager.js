export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;
  }

  updateMarkers(locations) {
    const locationsObj = {};
    locations.forEach( location => locationsObj[location.id] = location);

    locations.filter(location => !this.markers[location.id])
    .forEach(newLocation => this.createMarkerFromLocation(newLocation))

    Object.keys(this.markers).filter(locationId => !locationsObj[locationId])
    .forEach((locationId) => this.removeMarker(this.markers[locationId]))
    console.log('time to update?');
  }

  createMarkerFromLocation(location) {
    const marker = new google.maps.Marker({
      position: {lat:location.latitude, lng:location.longitude },
      map: this.map,
      locationId: location.id
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });

    marker.addListener('click', () => this.handleClick(location));
    this.markers[marker.locationId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.locationId].setMap(null);
    delete this.markers[marker.locationId];
  }
}
