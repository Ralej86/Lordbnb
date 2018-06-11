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

  render() {
    return (
      <div className="location-detail-cont">
        COME SEE ME
        <div className="location-detail-image">
        </div>
        <div>
          <div className="location-detail-reviews">
            <div className="location-detail">
              location details should be going here
            </div>
            <div className="reviews-form">
              reviews would go here...if i had one
            </div>
          </div>
          <div className="booking-form">
            booking would go here...if i had one
          </div>
        </div>
      </div>
    )
  }
}


export default LocationDetail;
