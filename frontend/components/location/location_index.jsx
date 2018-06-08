import React from 'react';

class LocationIndex extends React.Component {
  componentDidMount() {
    this.props.fetchLocations();
  }

  render() {
    const { locations, loading } = this.props;

    return (
      <div className="Location">
        <ul>
          (locations.map(location => <LocationIndexItem key={location.id} location={location} />))
        </ul>
      </div>
    )
  }
}

export default LocationIndex;
