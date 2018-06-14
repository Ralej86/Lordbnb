import React from 'react';

import ReviewIndexContainer from '../review/review_index_container';

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

  render() {;
    if (this.props.users === undefined || Object.values(this.props.users).length === 0) {
      return <div>loading...</div>;
    }

    return (
      <div className="location-detail-cont">
        COME SEE ME
        <div className="location-detail-image">
          <img id="host-image" src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e471a27144269e4b573dfdee025e7327&auto=format&fit=crop&w=500&q=60"/>
        </div>
        <div className="below-image">
          <div className="location-detail-reviews">
            <div className="location-detail">
              <div className="location-detail-title-user">
                <ul className="location-detail-titles">
                  <li className="location-detail-hometype">{this.props.location.home_type}</li>
                  <li className="location-detail-name">{this.props.location.name}</li>
                  <li className="location-detail-region">{this.props.location.region}</li>
                </ul>
                <div className="location-detail-user">
                  <img src={this.props.users[this.props.location.user_id]['image_url']} />
                  <p>{this.props.users[this.props.location.user_id].name}</p>
                </div>
              </div>
              <ul className="location-attr">
                <li><i className="fa fa-users"></i> {this.props.location.guests} Guests</li>
                <li><i className="fa fa-home"></i> {this.props.location.rooms} Rooms</li>
                <li><i className="fa fa-bed"></i> {this.props.location.beds} Beds</li>
                <li><i className="fa fa-bath"></i> {this.props.location.bathrooms} Bathrooms</li>
              </ul>
              <div className="location-description">
                <h2>About this listing</h2>
                <p>{this.props.location.description} LONGER TEXT HERE MORE TEXT</p>
              </div>
            </div>
              <div className="reviews">
                REVIEWS GO HERE
                <ReviewIndexContainer locationId={this.props.location.id}/>
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
