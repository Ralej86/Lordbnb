import React from 'react';

class LocationIndex extends React.Component {
  componentDidMount() {
    this.props.fetchLocations();
  }

  render() {
    const { locations } = this.props;

    return (
      <div className="location-cont">
        <h1 className="location-cont-title">Homes Around Middle Earth</h1>
        <br />
        <ul className="location-cont-index"->
          (locations.map(location => <LocationIndexItem key={location.id} location={location} />))
        </ul>
      </div>
    )
  }
}

export default LocationIndex;
