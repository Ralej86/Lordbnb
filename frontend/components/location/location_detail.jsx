import React from 'react';

class LocationDetail extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchLocation(this.props.match.params.locationId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.locationId !== nextProps.match.params.locationId) {
      this.props.fetchLocation(nextProps.match.params.locationId)
    }
  }
}


export default LocationDetail;
