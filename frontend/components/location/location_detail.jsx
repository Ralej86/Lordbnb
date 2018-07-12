import React from 'react';

import ReviewIndexContainer from '../review/review_index_container';
import CreateReviewContainer from '../review/create_review_container';
import BookingFormContainer from '../booking/booking_form_container';

class LocationDetail extends React.Component{
  constructor(props) {
    super(props)
    this.state={};
  }

  componentDidMount() {
    this.props.fetchLocation(this.props.match.params.locationId)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.locationId !== nextProps.match.params.locationId) {
      this.props.fetchLocation(nextProps.match.params.locationId)
    }
  }

  render() {
    if (!this.props.location || !this.props.users[this.props.location.user_id]) {
      return <div>loading...</div>;
    }
    return (
      <div className="location-detail-cont">
        <div className="location-detail-image">
          <img id="host-image" src={`${this.props.location.image_url}`}/>
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
                <p>{this.props.location.description}</p>
              </div>
            </div>
              <div className="reviews">
                <h2>REVIEWS</h2>
                <ReviewIndexContainer locationId={this.props.location.id}/>
                <CreateReviewContainer />
              </div>
            </div>
            <div className="booking-form">
              <BookingFormContainer />
            </div>
          </div>
        </div>
    )
  }
}


export default LocationDetail;
