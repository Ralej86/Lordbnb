import React from 'react';
import { Link } from 'react-router-dom';

class BookingIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
      if (!this.props.booking.booking.length < 1) {
        return <div>loading...</div>
      } else {
        return (
          <ul className="booking">
            <Link to={`/locations/${this.props.booking.booking.location_id}`}>
              <div className='booking-image'>
                <img src={`${this.props.booking.location.image_url}`}/>
              </div>
            </Link>
            <li className="booking-location-title">{this.props.booking.location.name}</li>
            <li className="booking-location-date">Check-in: {this.props.booking.booking.start_date}</li>
            <li className="booking-location-date">Check-out: {this.props.booking.booking.end_date}</li>
            <li className="booking-location-guests">Guests: {this.props.booking.booking.guests}</li>
            <button onClick={() => this.props.deleteBooking(this.props.booking.booking.id)}>Delete Booking</button>
          </ul>
      )
    }
  }
}


export default BookingIndexItem;
