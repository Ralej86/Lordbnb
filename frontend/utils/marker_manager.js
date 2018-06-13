export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};

  }

  updateMarkers(locations) {
    const locationsObj = {};
    locations.forEach( location => locationsObj[location.id] = location);

    locations
    .filter(location => !this.markers[location.id])
    .forEach(newLocation => this.createMarkerFromLocation(newLocation))

    console.log('time to update?');
  }

  createMarkerFromLocation(location) {
    const pos = new google.maps.LatLng(location.latitude, location.longitude);
    const marker = new google.maps.Marker({
      pos,
      map: this.map,
      locationId: location.id
    });

    marker.addListener('click', () => this.handleClick(location));
    this.markers[marker.locationId] = marker;
  }

}
